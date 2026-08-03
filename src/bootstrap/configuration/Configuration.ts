import {type AppEnvironment} from '~/bootstrap/configuration/validateAppEnvironment.mjs';

export class Configuration {
	public readonly apiUrl: string;

	constructor(appEnv: AppEnvironment) {
		this.apiUrl = appEnv.API_URL;
	}
}
