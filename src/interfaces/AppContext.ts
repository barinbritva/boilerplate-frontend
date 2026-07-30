import {PageMeta} from '../entities/Page';
import {Authenticator} from '../services/Authenticator';
import {Configuration} from '../services/Configuration';
import {PageMetaBuilder} from '../services/PageMetaBuilder';
import {RestApi} from '../services/RestApi';
import {RouteBuilder} from '../services/RouteBuilder';

export interface ServiceContainer {
	configuration: Configuration;
	restApi: RestApi;
	authenticator: Authenticator;
	defaultPageMeta: PageMeta;
	pageMetaBuilder: PageMetaBuilder;
	routeBuilder: RouteBuilder;
}

export interface AppContext {
	services: ServiceContainer;
}
