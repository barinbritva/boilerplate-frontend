import {AppContext, ServiceContainer} from '../../../interfaces/AppContext';

export function createContext(container: ServiceContainer): AppContext {
	return {
		services: container,
	};
}
