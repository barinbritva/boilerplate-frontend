import UniversalRouter from 'universal-router';
import {ServiceContainer} from '../../../interfaces/ServiceContainer';
import {ControllerResult} from '../../../interfaces/ControllerResult';
import {Route} from '../../../services/RouteBuilder';
import {SignInController} from '../../../controllers/SignInController';
import {HomeController} from '../../../controllers/HomeController';

export function createRouter(serviceContainer: ServiceContainer) {
	return new UniversalRouter<ControllerResult>([
		{
			path: Route.SignIn,
			action: async () => {
				const {authenticator, routeBuilder, pageMetaBuilder} = serviceContainer;
				authenticator.assertNoAccount();

				return new SignInController(authenticator, routeBuilder, pageMetaBuilder).handle();
			},
		},
		{
			path: Route.Root,
			action: async () => {
				const {authenticator, routeBuilder, pageMetaBuilder} = serviceContainer;
				const account = authenticator.getAccountOrThrow();

				return new HomeController(authenticator, routeBuilder, pageMetaBuilder, account).handle();
			},
		},
	]);
}
