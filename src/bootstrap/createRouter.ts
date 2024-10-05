import UniversalRouter from 'universal-router';
import {AppContext} from '../interfaces/AppContext';
import {ControllerResult} from '../interfaces/ControllerResult';
import {Route} from '../services/RouteBuilder';
import {SignInController} from '../controllers/SignInController';
import {HomeController} from '../controllers/HomeController';

export function createRouter(appContext: AppContext) {
	return new UniversalRouter<ControllerResult, AppContext>(
		[
			{
				path: Route.SignIn,
				action: (context) => {
					return new SignInController(context).handle();
				}
			},
			{
				path: Route.Root,
				action: (context) => {
					return new HomeController(context).handle();
				}
			}
		],
		{
			context: appContext
		}
	);
}
