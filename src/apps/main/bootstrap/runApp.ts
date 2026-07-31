import {createRouter} from './createRouter';
import {Page, UnsubscribePage} from '../../../core/presentation/Page';
import {Redirect} from '../../../core/routing/Redirect';
import {NotFoundError} from '../../../modules/common/services/http/errors/NotFoundError';
import {Configuration} from '../../../modules/common/services/Configuration';
import {ReactRenderer} from '../../../core/presentation/adapters/react/ReactRenderer';
import {PageMetaManager} from '../../../modules/common/services/PageMetaManager';
import {createServiceContainer} from './createServiceContainer';
import {ControllerResult} from '../../../core/routing/ControllerResult';

export async function runApp(): Promise<void> {
	const appContainer = document.createElement('div');
	document.body.appendChild(appContainer);

	const config = new Configuration();
	const serviceContainer = createServiceContainer(config);
	const router = createRouter(serviceContainer);
	const renderer = new ReactRenderer(appContainer);
	const pageMetaManager = new PageMetaManager();

	const {authenticator, navigationErrorResolver, navigation} = serviceContainer;

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
			result = navigationErrorResolver.resolve(error);

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
