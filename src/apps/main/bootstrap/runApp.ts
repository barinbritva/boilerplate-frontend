import {createRouter} from './createRouter';
import {Page, UnsubscribePage} from '../../../core/presentation/Page';
import {Redirect} from '../../../core/routing/Redirect';
import {NotFoundError} from '../../../core/http/errors/NotFoundError';
import {Configuration} from '../../../core/configuration/Configuration';
import {ReactRenderer} from '../../../core/presentation/adapters/react/ReactRenderer';
import {PageMetaManager} from '../../../core/presentation/PageMetaManager';
import {createServiceContainer} from './createServiceContainer';
import {ControllerResult} from '../../../core/routing/ControllerResult';
import {UnauthorizedError} from '../../../core/http/errors/UnauthorizedError';
import {AlreadyAuthorizedError} from '../../../modules/authentication/errors/AlreadyAuthorizedError';
import {ErrorPage} from '../../../modules/common/views/pages/ErrorPage';
import {ReactView} from '../../../core/presentation/adapters/react/ReactView';

export async function runApp(): Promise<void> {
	const appContainer = document.createElement('div');
	document.body.appendChild(appContainer);

	const config = new Configuration();
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
			}

			if (error instanceof AlreadyAuthorizedError) {
				result = new Redirect(routeBuilder.root());
			}

			const normalizedError = error instanceof Error ? error : new Error(String(error));

			result = new Page(
				new ReactView(ErrorPage, {templateProps: {}, message: normalizedError.message}),
				pageMetaBuilder.build({title: 'Error'}),
			);

			if (!(result instanceof Redirect)) {
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
