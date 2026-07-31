import {createRouter} from './createRouter';
import {Page, UnsubscribePage} from '../../../modules/common/navigation/entities/Page';
import {Redirect} from '../../../modules/common/navigation/entities/Redirect';
import {NotFoundError} from '../../../modules/common/services/http/errors/NotFoundError';
import {Configuration} from '../../../modules/common/services/Configuration';
import {DomManager} from '../../../modules/common/navigation/services/DomManager';
import {PageMetaManager} from '../../../modules/common/services/PageMetaManager';
import {createServiceContainer} from './createServiceContainer';
import {ControllerResult} from '../../../modules/common/navigation/interfaces/ControllerResult';

export async function runApp(): Promise<void> {
	const appContainer = document.createElement('div');
	document.body.appendChild(appContainer);

	const config = new Configuration();
	const serviceContainer = createServiceContainer(config);
	const router = createRouter(serviceContainer);
	const dom = new DomManager(appContainer);
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
					dom.render(update.view);
				}
			});
		}

		dom.render(result);
	}

	navigation.history.listen(({location}) => {
		navigate(location);
	});

	navigate(navigation.history.location);
}
