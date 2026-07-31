import {AccountModel} from '../../authentication/models/AccountModel';
import {Page} from '../../../core/presentation/Page';
import {Controller} from '../../../core/routing/Controller';
import {ControllerResult} from '../../../core/routing/ControllerResult';
import {Authenticator} from '../../authentication/services/Authenticator';
import {Navigation} from '../../common/navigation/services/Navigation';
import {PageMetaBuilder} from '../../../core/presentation/PageMetaBuilder';
import {RouteBuilder} from '../../common/services/RouteBuilder';
import {HomePage} from '../views/pages/HomePage';
import {ReactView} from '../../../core/presentation/adapters/react/ReactView';

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
			new ReactView(HomePage, {
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
