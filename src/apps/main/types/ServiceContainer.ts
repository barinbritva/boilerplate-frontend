import {PageMeta} from '../../../modules/common/navigation/entities/Page';
import {Authenticator} from '../../../modules/authentication/services/Authenticator';
import {Configuration} from '../../../modules/common/services/Configuration';
import {NavigationErrorResolver} from '../../../modules/common/navigation/services/NavigationErrorResolver';
import {PageMetaBuilder} from '../../../modules/common/services/PageMetaBuilder';
import {HttpTransport} from '../../../modules/common/services/http/HttpTransport';
import {RouteBuilder} from '../../../modules/common/services/RouteBuilder';
import {Navigation} from '../../../modules/common/navigation/services/Navigation';

export interface ServiceContainer {
	navigation: Navigation;
	configuration: Configuration;
	restApi: HttpTransport;
	authenticator: Authenticator;
	defaultPageMeta: PageMeta;
	pageMetaBuilder: PageMetaBuilder;
	routeBuilder: RouteBuilder;
	navigationErrorResolver: NavigationErrorResolver;
}
