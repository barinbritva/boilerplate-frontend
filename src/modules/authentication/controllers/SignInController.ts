import {Page} from '../../common/navigation/entities/Page';
import {Controller} from '../../common/navigation/interfaces/Controller';
import {ControllerResult} from '../../common/navigation/interfaces/ControllerResult';
import {Authenticator} from '../services/Authenticator';
import {Navigation} from '../../common/navigation/services/Navigation';
import {PageMetaBuilder} from '../../common/services/PageMetaBuilder';
import {RouteBuilder} from '../../common/services/RouteBuilder';
import {SignInPage} from '../views/pages/SignInPage';

export class SignInController implements Controller {
	private readonly authenticator: Authenticator;
	private readonly routeBuilder: RouteBuilder;
	private readonly pageMetaBuilder: PageMetaBuilder;
	private readonly navigation: Navigation;

	constructor(
		authenticator: Authenticator,
		routeBuilder: RouteBuilder,
		pageMetaBuilder: PageMetaBuilder,
		navigation: Navigation,
	) {
		this.authenticator = authenticator;
		this.routeBuilder = routeBuilder;
		this.pageMetaBuilder = pageMetaBuilder;
		this.navigation = navigation;
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
		this.navigation.go(this.routeBuilder.root());
	}
}
