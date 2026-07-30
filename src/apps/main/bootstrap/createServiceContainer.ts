import {PageMeta} from '../../../entities/Page';
import {ServiceContainer} from '../../../interfaces/ServiceContainer';
import {Authenticator} from '../../../services/Authenticator';
import {Configuration} from '../../../services/Configuration';
import {NavigationErrorResolver} from '../../../services/NavigationErrorResolver';
import {PageMetaBuilder} from '../../../services/PageMetaBuilder';
import {RestApi} from '../../../services/RestApi';
import {RouteBuilder} from '../../../services/RouteBuilder';

export function createServiceContainer(configuration: Configuration): ServiceContainer {
	const defaultPageMeta = new PageMeta('Boilerplate');
	const routeBuilder = new RouteBuilder();
	const pageMetaBuilder = new PageMetaBuilder({defaultPageMeta});

	return {
		configuration,
		restApi: new RestApi(configuration.apiUrl),
		authenticator: new Authenticator(),
		defaultPageMeta,
		pageMetaBuilder,
		routeBuilder,
		navigationErrorResolver: new NavigationErrorResolver(routeBuilder, pageMetaBuilder),
	};
}
