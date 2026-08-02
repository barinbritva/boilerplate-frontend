export class Configuration {
	constructor() {
		const appEnv = window.APP_ENV;

		if (appEnv == null) {
			throw new Error('Environment variables are not set.');
		}

		const errors: string[] = [];

		if (appEnv['API_URL'] == null) {
			errors.push('API_URL not defined');
		}

		if (errors.length > 0) {
			throw new Error(`Configuration errors:\n${errors.join('\n')}`);
		}
	}
}
