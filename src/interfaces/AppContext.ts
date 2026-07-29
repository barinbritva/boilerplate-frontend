import {Meta} from '../entities/Page';
import {Authenticator} from '../services/Authenticator';
import {Configuration} from '../services/Configuration';
import {RestApi} from '../services/RestApi';
import {RouteBuilder} from '../services/RouteBuilder';

export interface ServiceContainer {
	restApi: RestApi;
	authenticator: Authenticator;
}

export interface AppContext {
	configuration: Configuration;
	routeBuilder: RouteBuilder;
	defaultPageMeta: Meta;
	services: ServiceContainer;
}
