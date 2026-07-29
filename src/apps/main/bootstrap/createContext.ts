import {Meta} from '../../../entities/Page';
import {AppContext, ServiceContainer} from '../../../interfaces/AppContext';
import {Configuration} from '../../../services/Configuration';
import {RouteBuilder} from '../../../services/RouteBuilder';

export function createContext(config: Configuration, container: ServiceContainer): AppContext {
	return {
		configuration: config,
		defaultPageMeta: new Meta('Boilerplate'),
		routeBuilder: new RouteBuilder(),
		services: container,
	};
}
