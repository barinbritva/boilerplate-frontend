import UniversalRouter from 'universal-router';
import {ServiceContainer} from '~/bootstrap/serviceContainer/createServiceContainer';
import {ControllerResult} from '~/core/routing/ControllerResult';
import {Route} from './RouteBuilder';
import {SignInController} from '~/modules/authentication/screens/SignInController';
import {HomeController} from '~/modules/home/screens/HomeController';

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
