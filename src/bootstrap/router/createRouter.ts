import UniversalRouter from 'universal-router';
import {type ServiceContainer} from '#/bootstrap/serviceContainer/createServiceContainer.js';
import {type ControllerResult} from '#/core/routing/ControllerResult.js';
import {Route} from './RouteBuilder.js';
import {SignInController} from '#/modules/authentication/signInScreen/SignInController.js';
import {HomeController} from '#/modules/home/homeScreen/HomeController.js';

export function createRouter(serviceContainer: ServiceContainer) {
	return new UniversalRouter<ControllerResult>([
		{
			path: Route.SignIn,
			action: async () => {
				const {authenticator, routeBuilder, pageMetaBuilder, navigation} = serviceContainer;
				authenticator.assertNoAccount();

				return new SignInController(authenticator, routeBuilder, pageMetaBuilder, navigation).handle();
			},
		},
		{
			path: Route.Root,
			action: async () => {
				const {authenticator, routeBuilder, pageMetaBuilder, navigation} = serviceContainer;
				const account = authenticator.getAccountOrThrow();

				return new HomeController(authenticator, routeBuilder, pageMetaBuilder, account, navigation).handle();
			},
		},
	]);
}
