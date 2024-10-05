import {createRouter} from '../bootstrap/createRouter';
import {ErrorController} from '../controllers/ErrorController';
import {Page, UnsubscribePage} from '../entities/Page';
import {Redirect} from '../entities/Redirect';
import {AlreadyAuthorizedError} from '../errors/AlreadyAuthorizedError';
import {NotFoundError} from '../errors/NotFoundError';
import {UnauthorizedError} from '../errors/UnauthorizedError';
import {Configuration} from '../services/Configuration';
import {DomManager} from '../services/DomManager';
import {PageMetaManager} from '../services/PageMetaManager';
import {RouteBuilder} from '../services/RouteBuilder';
import {go, history} from '../services/navigation';
import {createContext} from './createContext';
import {createServiceContainer} from './createServiceContainer';
import {loadAccount} from './loadAccount';

export async function runApp(): Promise<void> {
	const config = new Configuration();
	const serviceContainer = createServiceContainer(config);
	const account = await loadAccount(/* serviceContainer.restApi */);
	const context = createContext(config, serviceContainer, account);
	const routeBuilder = new RouteBuilder();
	const router = createRouter(context);
	const dom = new DomManager();
	const pageMetaManager = new PageMetaManager();

	let unsubscribePageUpdates: UnsubscribePage | null = null;
	async function navigate(location: Pick<Location, 'pathname'>) {
		const routes = routeBuilder;

		if (unsubscribePageUpdates != null) {
			unsubscribePageUpdates();
			unsubscribePageUpdates = null;
		}

		try {
			const result = await router.resolve({
				pathname: location.pathname
			});

			if (result == null) {
				throw new NotFoundError();
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
		} catch (error) {
			if (error instanceof UnauthorizedError) {
				go(routes.signIn());
				return;
			}

			if (error instanceof AlreadyAuthorizedError) {
				go(routes.root());
				return;
			}

			// Sentry.captureException(error);
			console.error(error);

			const errorController = new ErrorController(error);
			const result = errorController.handle();

			dom.renderPage(result);
		} finally {
		}
	}

	history.listen(({location}) => {
		navigate(location);
	});

	navigate(history.location);
}
