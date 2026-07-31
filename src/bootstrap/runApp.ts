import {createRouter} from './router/createRouter';
import {Page, UnsubscribePage} from '../core/presentation/Page';
import {Redirect} from '../core/routing/Redirect';
import {NotFoundError} from '../core/http/errors/NotFoundError';
import {ReactRenderer} from '../core/presentation/ReactRenderer';
import {PageMetaManager} from '../core/presentation/PageMetaManager';
import {createServiceContainer} from './serviceContainer/createServiceContainer';
import {ControllerResult} from '../core/routing/ControllerResult';
import {UnauthorizedError} from '../core/http/errors/UnauthorizedError';
import {ErrorPage} from '../modules/error-handling/screens/unexpected-error/ErrorPage';
import {createConfiguration} from './configuration/createConfiguration';
import {AlreadyAuthorizedError} from '../modules/authentication/session/errors/AlreadyAuthorizedError';
import {View} from '../core/presentation/View';

export async function runApp(): Promise<void> {
	const appContainer = document.createElement('div');
	document.body.appendChild(appContainer);

	const config = createConfiguration();
	const serviceContainer = createServiceContainer(config);
	const router = createRouter(serviceContainer);
	const renderer = new ReactRenderer(appContainer);
	const pageMetaManager = new PageMetaManager();

	const {authenticator, navigation, routeBuilder, pageMetaBuilder} = serviceContainer;

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
