import UniversalRouter from 'universal-router';
import {type ServiceContainer} from '#/bootstrap/serviceContainer/createServiceContainer.js';
import {type ControllerResult} from '#/core/routing/ControllerResult.js';
import {Route} from './RouteBuilder.js';

export function createRouter(serviceContainer: ServiceContainer) {
	return new UniversalRouter<ControllerResult>([
		{
			path: Route.SignIn,
			action: async () => {
				const {authenticator, routeBuilder, pageMetaBuilder, navigation} = serviceContainer;
				authenticator.assertNoAccount();

				const {SignInController} = await import('#/modules/authentication/signInScreen/SignInController.js');

				return new SignInController(authenticator, routeBuilder, pageMetaBuilder, navigation).handle();
			},
		},
		{
			path: Route.Root,
			action: async () => {
				const {authenticator, routeBuilder, pageMetaBuilder, navigation} = serviceContainer;
				const account = authenticator.getAccountOrThrow();

				const {HomeController} = await import('#/modules/home/homeScreen/HomeController.js');

				return new HomeController(authenticator, routeBuilder, pageMetaBuilder, account, navigation).handle();
			},
		},
	]);
}
