import {createRouter} from './router/createRouter.js';
import {Page, type UnsubscribePage} from '#/core/presentation/Page.js';
import {Redirect} from '#/core/routing/Redirect.js';
import {NotFoundError} from '#/core/http/errors/NotFoundError.js';
import {ReactRenderer} from '#/core/presentation/ReactRenderer.js';
import {PageMetaManager} from '#/core/presentation/PageMetaManager.js';
import {createServiceContainer} from './serviceContainer/createServiceContainer.js';
import {type ControllerResult} from '#/core/routing/ControllerResult.js';
import {UnauthorizedError} from '#/core/http/errors/UnauthorizedError.js';
import {ErrorPage} from '#/modules/errorHandling/unexpectedErrorScreen/ErrorPage.js';
import {createConfiguration} from './configuration/createConfiguration.js';
import {AlreadyAuthorizedError} from '#/modules/authentication/session/errors/AlreadyAuthorizedError.js';
import {View} from '#/core/presentation/View.js';
import {createReactContexts} from './react/createReactContexts.js';

export async function runApp(): Promise<void> {
	const appContainer = document.createElement('div');
	document.body.appendChild(appContainer);

	const config = createConfiguration();
	const serviceContainer = createServiceContainer(config);
	const {authenticator, navigation, routeBuilder, pageMetaBuilder} = serviceContainer;
	const router = createRouter(serviceContainer);
	const renderer = new ReactRenderer(appContainer, createReactContexts({navigation, strictModeEnabled: true}));
	const pageMetaManager = new PageMetaManager();

	// This authentication is just for demonstration purposes
	await authenticator.loadAccount();

	let unsubscribePageUpdates: UnsubscribePage | null = null;
	async function navigate(location: Pick<Location, 'pathname'>) {
		if (unsubscribePageUpdates != null) {
			unsubscribePageUpdates();
			unsubscribePageUpdates = null;
		}

		let result: ControllerResult;
		try {
			const nullableResult = await router.resolve({
				pathname: location.pathname,
			});

			if (nullableResult == null) {
				throw new NotFoundError();
			}

			result = nullableResult;
		} catch (error) {
			if (error instanceof UnauthorizedError) {
				result = new Redirect(routeBuilder.signIn());
			} else if (error instanceof AlreadyAuthorizedError) {
				result = new Redirect(routeBuilder.root());
			} else {
				const normalizedError = error instanceof Error ? error : new Error(String(error));

				result = new Page(
					new View(ErrorPage, {templateProps: {}, message: normalizedError.message}),
					pageMetaBuilder.build({title: 'Error'}),
				);

				// Sentry.captureException(error)
				console.error(error);
			}
		}

		if (result instanceof Redirect) {
			navigation.go(result.redirectTo);
			return;
		}

		if (result instanceof Page) {
			pageMetaManager.apply(result.meta);
			unsubscribePageUpdates = result.subscribePageChange((update) => {
				if (update.meta != null) {
					pageMetaManager.apply(update.meta);
				}

				if (update.view != null) {
					renderer.render(update.view);
				}
			});
		}

		renderer.render(result.view);
	}

	navigation.history.listen(({location}) => {
		navigate(location);
	});

	navigate(navigation.history.location);
}
