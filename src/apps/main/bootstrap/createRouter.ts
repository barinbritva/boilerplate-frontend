import UniversalRouter from 'universal-router';
import {AppContext} from '../../../interfaces/AppContext';
import {ControllerResult} from '../../../interfaces/ControllerResult';
import {Route} from '../../../services/RouteBuilder';
import {SignInController} from '../../../controllers/SignInController';
import {HomeController} from '../../../controllers/HomeController';

export function createRouter(appContext: AppContext) {
	return new UniversalRouter<ControllerResult, AppContext>(
		[
			{
				path: Route.SignIn,
				action: async (context) => {
					const {authenticator, routeBuilder, pageMetaBuilder} = context.services;
					authenticator.assertNoAccount();

					return new SignInController(authenticator, routeBuilder, pageMetaBuilder).handle();
				},
			},
			{
				path: Route.Root,
				action: async (context) => {
					const {authenticator, routeBuilder, pageMetaBuilder} = context.services;
					const account = authenticator.getAccountOrThrow();

					return new HomeController(authenticator, routeBuilder, pageMetaBuilder, account).handle();
				},
			},
		],
		{
			context: appContext,
		},
	);
}
