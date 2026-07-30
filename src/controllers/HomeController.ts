import {Account} from '../entities/Account';
import {Page} from '../entities/Page';
import {Controller} from '../interfaces/Controller';
import {ControllerResult} from '../interfaces/ControllerResult';
import {Authenticator} from '../services/Authenticator';
import {go} from '../services/navigation';
import {PageMetaBuilder} from '../services/PageMetaBuilder';
import {RouteBuilder} from '../services/RouteBuilder';
import {HomePage} from '../views/pages/HomePage';

export class HomeController implements Controller {
	private readonly authenticator: Authenticator;
	private readonly routeBuilder: RouteBuilder;
	private readonly pageMetaBuilder: PageMetaBuilder;
	private readonly account: Account;

	constructor(
		authenticator: Authenticator,
		routeBuilder: RouteBuilder,
		pageMetaBuilder: PageMetaBuilder,
		account: Account,
	) {
		this.authenticator = authenticator;
		this.routeBuilder = routeBuilder;
		this.pageMetaBuilder = pageMetaBuilder;
		this.account = account;
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
		go(this.routeBuilder.signIn());
	}
}
