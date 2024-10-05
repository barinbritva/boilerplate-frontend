import {Account} from '../entities/Account';
import {Meta} from '../entities/Page';
import {Configuration} from '../services/Configuration';
import {RestApi} from '../services/RestApi';
import {RouteBuilder} from '../services/RouteBuilder';

export interface UserBase {
	isSignedIn: () => boolean;
}

export interface ServiceContainer {
	restApi: RestApi;
}

export interface AppContext {
	configuration: Configuration;
	routeBuilder: RouteBuilder;
	defaultPageMeta: Meta;
	user: Account;
	services: ServiceContainer;
}
