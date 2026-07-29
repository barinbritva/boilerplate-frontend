import {Meta, Page} from '../entities/Page';
import {ControllerResult} from '../interfaces/ControllerResult';
import {Authenticator} from '../services/Authenticator';
import {go} from '../services/navigation';
import {RouteBuilder} from '../services/RouteBuilder';
import {SignInPage} from '../views/pages/SignInPage';
import {BaseController, ControllerContext} from './BaseController';

export class SignInController extends BaseController {
	private readonly authenticator: Authenticator;
	private readonly routes: RouteBuilder;

	constructor(context: ControllerContext, authenticator: Authenticator, routes: RouteBuilder) {
		super(context);

		this.authenticator = authenticator;
		this.routes = routes;
	}

	public override handle(): Promise<ControllerResult> | ControllerResult {
		return new Page(
			SignInPage,
			{
				templateProps: {},
				onSignIn: () => {
					this.handleSignIn();
				},
			},
			new Meta('Sign In'),
		);
	}

	private async handleSignIn(): Promise<void> {
		await this.authenticator.signIn();
		go(this.routes.root());
	}
}
