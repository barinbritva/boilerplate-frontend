import {createRouter} from './createRouter';
import {Page, UnsubscribePage} from '../../../entities/Page';
import {Redirect} from '../../../entities/Redirect';
import {NotFoundError} from '../../../errors/NotFoundError';
import {Configuration} from '../../../services/Configuration';
import {DomManager} from '../../../services/DomManager';
import {PageMetaManager} from '../../../services/PageMetaManager';
import {go, history} from '../../../services/navigation';
import {createServiceContainer} from './createServiceContainer';
import {ControllerResult} from '../../../interfaces/ControllerResult';

export async function runApp(): Promise<void> {
	const config = new Configuration();
	const serviceContainer = createServiceContainer(config);
	const router = createRouter(serviceContainer);
	const dom = new DomManager();
	const pageMetaManager = new PageMetaManager();

	const {authenticator, navigationErrorResolver} = serviceContainer;

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
			go(result.redirectTo);
			return;
		}

		if (result instanceof Page) {
			pageMetaManager.apply(result.meta);
			unsubscribePageUpdates = result.subscribePageChange((update) => {
				if (update.meta != null) {
					pageMetaManager.apply(update.meta);
				}

				if (update.view != null) {
					dom.renderPage(update.view);
				}
			});
		}

		dom.renderPage(result);
	}

	history.listen(({location}) => {
		navigate(location);
	});

	navigate(history.location);
}
