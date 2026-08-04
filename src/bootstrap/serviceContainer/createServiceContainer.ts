import {PageMeta} from '#/core/presentation/PageMeta.js';
import {Authenticator} from '#/modules/authentication/session/Authenticator.js';
import {Configuration} from '#/bootstrap/configuration/Configuration.js';
import {PageMetaBuilder} from '#/core/presentation/PageMetaBuilder.js';
import {HttpTransport} from '#/core/http/HttpTransport.js';
import {RouteBuilder} from '#/bootstrap/router/RouteBuilder.js';
import {BrowserNavigation} from '#/core/navigation/BrowserNavigation.js';

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
