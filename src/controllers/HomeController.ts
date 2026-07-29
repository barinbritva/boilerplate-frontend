import {Account} from '../entities/Account';
import {Meta, Page} from '../entities/Page';
import {ControllerResult} from '../interfaces/ControllerResult';
import {Authenticator} from '../services/Authenticator';
import {go} from '../services/navigation';
import {RouteBuilder} from '../services/RouteBuilder';
import {HomePage} from '../views/pages/HomePage';
import {BaseController, ControllerContext} from './BaseController';

export class HomeController extends BaseController {
	private readonly authenticator: Authenticator;
	private readonly routes: RouteBuilder;
	private readonly account: Account;

	constructor(context: ControllerContext, authenticator: Authenticator, routes: RouteBuilder, account: Account) {
		super(context);

		this.authenticator = authenticator;
		this.routes = routes;
		this.account = account;
	}

	public override handle(): Promise<ControllerResult> | ControllerResult {
		return new Page(
			HomePage,
			{
				templateProps: {account: this.account},
				onSignOut: () => {
					this.handleSignOut();
				},
			},
			new Meta('Home'),
		);
	}

	private async handleSignOut() {
		await this.authenticator.signOut();
		go(this.routes.signIn());
	}
}
