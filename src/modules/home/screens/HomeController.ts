import {AccountModel} from '../../authentication/session/AccountModel';
import {Page} from '../../../core/presentation/Page';
import {Controller} from '../../../core/routing/Controller';
import {ControllerResult} from '../../../core/routing/ControllerResult';
import {Authenticator} from '../../authentication/session/Authenticator';
import {BrowserNavigation} from '../../../core/navigation/BrowserNavigation';
import {PageMetaBuilder} from '../../../core/presentation/PageMetaBuilder';
import {RouteBuilder} from '../../../bootstrap/router/RouteBuilder';
import {HomePage} from './ui/pages/HomePage';
import {View} from '../../../core/presentation/View';

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
