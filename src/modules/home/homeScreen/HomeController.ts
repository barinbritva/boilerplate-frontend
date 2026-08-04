import {AccountModel} from '#/modules/authentication/session/AccountModel.js';
import {Page} from '#/core/presentation/Page.js';
import {type Controller} from '#/core/routing/Controller.js';
import {type ControllerResult} from '#/core/routing/ControllerResult.js';
import {Authenticator} from '#/modules/authentication/session/Authenticator.js';
import {BrowserNavigation} from '#/core/navigation/BrowserNavigation.js';
import {PageMetaBuilder} from '#/core/presentation/PageMetaBuilder.js';
import {RouteBuilder} from '#/bootstrap/router/RouteBuilder.js';
import {HomePage} from './HomePage.js';
import {View} from '#/core/presentation/View.js';

export class HomeController implements Controller {
	private readonly authenticator: Authenticator;
	private readonly routeBuilder: RouteBuilder;
	private readonly pageMetaBuilder: PageMetaBuilder;
	private readonly account: AccountModel;
	private readonly navigation: BrowserNavigation;

	constructor(
		authenticator: Authenticator,
		routeBuilder: RouteBuilder,
		pageMetaBuilder: PageMetaBuilder,
		account: AccountModel,
		navigation: BrowserNavigation,
	) {
		this.authenticator = authenticator;
		this.routeBuilder = routeBuilder;
		this.pageMetaBuilder = pageMetaBuilder;
		this.account = account;
		this.navigation = navigation;
	}

	public handle(): Promise<ControllerResult> | ControllerResult {
		return new Page(
			new View(HomePage, {
				templateProps: {account: this.account},
				onSignOut: () => {
					this.handleSignOut();
				},
			}),
			this.pageMetaBuilder.build({title: 'Home'}),
		);
	}

	private async handleSignOut() {
		await this.authenticator.signOut();
		this.navigation.go(this.routeBuilder.signIn());
	}
}
