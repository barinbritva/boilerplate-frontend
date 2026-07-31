import {Page} from '../../core/presentation/Page';
import {Controller} from '../../core/routing/Controller';
import {ControllerResult} from '../../core/routing/ControllerResult';
import {Authenticator} from './Authenticator';
import {BrowserNavigation} from '../../core/navigation/BrowserNavigation';
import {PageMetaBuilder} from '../../core/presentation/PageMetaBuilder';
import {RouteBuilder} from '../common/services/RouteBuilder';
import {SignInPage} from './SignInPage';
import {ReactView} from '../../core/presentation/adapters/react/ReactView';

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
			new ReactView(SignInPage, {
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
