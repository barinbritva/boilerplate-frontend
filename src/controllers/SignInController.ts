import {Page} from '../entities/Page';
import {Controller} from '../interfaces/Controller';
import {ControllerResult} from '../interfaces/ControllerResult';
import {Authenticator} from '../services/Authenticator';
import {go} from '../services/navigation';
import {PageMetaBuilder} from '../services/PageMetaBuilder';
import {RouteBuilder} from '../services/RouteBuilder';
import {SignInPage} from '../views/pages/SignInPage';

export class SignInController implements Controller {
	private readonly authenticator: Authenticator;
	private readonly routeBuilder: RouteBuilder;
	private readonly pageMetaBuilder: PageMetaBuilder;

	constructor(authenticator: Authenticator, routeBuilder: RouteBuilder, pageMetaBuilder: PageMetaBuilder) {
		this.authenticator = authenticator;
		this.routeBuilder = routeBuilder;
		this.pageMetaBuilder = pageMetaBuilder;
	}

	public handle(): Promise<ControllerResult> | ControllerResult {
		return new Page(
			SignInPage,
			{
				templateProps: {},
				onSignIn: () => {
					this.handleSignIn();
				},
			},
			this.pageMetaBuilder.build({title: 'Sign In'}),
		);
	}

	private async handleSignIn(): Promise<void> {
		await this.authenticator.signIn();
		go(this.routeBuilder.root());
	}
}
