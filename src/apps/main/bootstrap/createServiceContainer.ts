import {PageMeta} from '../../../core/presentation/PageMeta';
import {ServiceContainer} from '../types/ServiceContainer';
import {Authenticator} from '../../../modules/authentication/services/Authenticator';
import {Configuration} from '../../../modules/common/services/Configuration';
import {NavigationErrorResolver} from '../../../modules/common/navigation/services/NavigationErrorResolver';
import {PageMetaBuilder} from '../../../core/presentation/PageMetaBuilder';
import {HttpTransport} from '../../../modules/common/services/http/HttpTransport';
import {RouteBuilder} from '../../../modules/common/services/RouteBuilder';
import {Navigation} from '../../../modules/common/navigation/services/Navigation';

export function createServiceContainer(configuration: Configuration): ServiceContainer {
	const defaultPageMeta = new PageMeta('Boilerplate');
	const routeBuilder = new RouteBuilder();
	const pageMetaBuilder = new PageMetaBuilder({defaultPageMeta});

	return {
		navigation: new Navigation(),
		configuration,
		restApi: new HttpTransport(configuration.apiUrl),
		authenticator: new Authenticator(),
		defaultPageMeta,
		pageMetaBuilder,
		routeBuilder,
		navigationErrorResolver: new NavigationErrorResolver(routeBuilder, pageMetaBuilder),
	};
}
