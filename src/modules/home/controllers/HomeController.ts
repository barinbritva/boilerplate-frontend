import {AccountModel} from '../../authentication/models/AccountModel';
import {Page} from '../../common/navigation/entities/Page';
import {Controller} from '../../common/navigation/interfaces/Controller';
import {ControllerResult} from '../../common/navigation/interfaces/ControllerResult';
import {Authenticator} from '../../authentication/services/Authenticator';
import {Navigation} from '../../common/navigation/services/Navigation';
import {PageMetaBuilder} from '../../common/services/PageMetaBuilder';
import {RouteBuilder} from '../../common/services/RouteBuilder';
import {HomePage} from '../views/pages/HomePage';

export class HomeController implements Controller {
	private readonly authenticator: Authenticator;
	private readonly routeBuilder: RouteBuilder;
	private readonly pageMetaBuilder: PageMetaBuilder;
	private readonly account: AccountModel;
	private readonly navigation: Navigation;

	constructor(
		authenticator: Authenticator,
		routeBuilder: RouteBuilder,
		pageMetaBuilder: PageMetaBuilder,
		account: AccountModel,
		navigation: Navigation,
	) {
		this.authenticator = authenticator;
		this.routeBuilder = routeBuilder;
		this.pageMetaBuilder = pageMetaBuilder;
		this.account = account;
		this.navigation = navigation;
	}

	public handle(): Promise<ControllerResult> | ControllerResult {
		return new Page(
			HomePage,
			{
				templateProps: {account: this.account},
				onSignOut: () => {
					this.handleSignOut();
				},
			},
			this.pageMetaBuilder.build({title: 'Home'}),
		);
	}

	private async handleSignOut() {
		await this.authenticator.signOut();
		this.navigation.go(this.routeBuilder.signIn());
	}
}
