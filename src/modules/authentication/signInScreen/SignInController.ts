import {Page} from '#/core/presentation/Page.js';
import {type Controller} from '#/core/routing/Controller.js';
import {type ControllerResult} from '#/core/routing/ControllerResult.js';
import {Authenticator} from '#/modules/authentication/session/Authenticator.js';
import {BrowserNavigation} from '#/core/navigation/BrowserNavigation.js';
import {PageMetaBuilder} from '#/core/presentation/PageMetaBuilder.js';
import {RouteBuilder} from '#/bootstrap/router/RouteBuilder.js';
import {View} from '#/core/presentation/View.js';
import {SignInPage} from './SignInPage.js';

export class SignInController implements Controller {
	private readonly authenticator: Authenticator;
	private readonly routeBuilder: RouteBuilder;
	private readonly pageMetaBuilder: PageMetaBuilder;
	private readonly navigation: BrowserNavigation;

	constructor(
		authenticator: Authenticator,
		routeBuilder: RouteBuilder,
		pageMetaBuilder: PageMetaBuilder,
		navigation: BrowserNavigation,
	) {
		this.authenticator = authenticator;
		this.routeBuilder = routeBuilder;
		this.pageMetaBuilder = pageMetaBuilder;
		this.navigation = navigation;
	}

	public handle(): Promise<ControllerResult> | ControllerResult {
		return new Page(
			new View(SignInPage, {
				templateProps: {},
				onSignIn: () => {
					this.handleSignIn();
				},
			}),
			this.pageMetaBuilder.build({title: 'Sign In'}),
		);
	}

	private async handleSignIn(): Promise<void> {
		await this.authenticator.signIn();
		this.navigation.go(this.routeBuilder.root());
	}
}
