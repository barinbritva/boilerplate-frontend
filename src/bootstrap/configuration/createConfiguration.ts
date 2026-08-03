import {validateAppEnvironment} from '#/bootstrap/configuration/validateAppEnvironment.mjs';
import {Configuration} from './Configuration.js';

export function createConfiguration(): Configuration {
	const appEnv = validateAppEnvironment(window.APP_ENV);

	return new Configuration(appEnv);
}
