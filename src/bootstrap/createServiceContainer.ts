import {PageMeta} from '../core/presentation/PageMeta';
import {Authenticator} from '../modules/authentication/Authenticator';
import {Configuration} from '../core/configuration/Configuration';
import {PageMetaBuilder} from '../core/presentation/PageMetaBuilder';
import {HttpTransport} from '../core/http/HttpTransport';
import {RouteBuilder} from '../modules/common/services/RouteBuilder';
import {BrowserNavigation} from '../core/navigation/BrowserNavigation';

export interface ServiceContainer {
	navigation: BrowserNavigation;
	configuration: Configuration;
	httpTransport: HttpTransport;
	authenticator: Authenticator;
	defaultPageMeta: PageMeta;
	pageMetaBuilder: PageMetaBuilder;
	routeBuilder: RouteBuilder;
}

export function createServiceContainer(configuration: Configuration): ServiceContainer {
	const defaultPageMeta = new PageMeta('Boilerplate');
	const routeBuilder = new RouteBuilder();
	const pageMetaBuilder = new PageMetaBuilder({defaultPageMeta});

	return {
		navigation: new BrowserNavigation(),
		configuration,
		httpTransport: new HttpTransport(),
		authenticator: new Authenticator(),
		defaultPageMeta,
		pageMetaBuilder,
		routeBuilder,
	};
}
