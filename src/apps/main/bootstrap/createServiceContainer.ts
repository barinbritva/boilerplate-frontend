import {PageMeta} from '../../../entities/Page';
import {ServiceContainer} from '../../../interfaces/AppContext';
import {Authenticator} from '../../../services/Authenticator';
import {Configuration} from '../../../services/Configuration';
import {PageMetaBuilder} from '../../../services/PageMetaBuilder';
import {RestApi} from '../../../services/RestApi';
import {RouteBuilder} from '../../../services/RouteBuilder';

export function createServiceContainer(configuration: Configuration): ServiceContainer {
	const defaultPageMeta = new PageMeta('Boilerplate');

	return {
		configuration,
		restApi: new RestApi(configuration.apiUrl),
		authenticator: new Authenticator(),
		defaultPageMeta,
		pageMetaBuilder: new PageMetaBuilder({defaultPageMeta}),
		routeBuilder: new RouteBuilder(),
	};
}
