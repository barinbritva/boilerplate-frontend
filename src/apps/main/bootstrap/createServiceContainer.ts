import {ServiceContainer} from '../../../interfaces/AppContext';
import {Authenticator} from '../../../services/Authenticator';
import {Configuration} from '../../../services/Configuration';
import {RestApi} from '../../../services/RestApi';

export function createServiceContainer(config: Configuration): ServiceContainer {
	return {
		restApi: new RestApi(config.apiUrl),
		authenticator: new Authenticator(),
	};
}
