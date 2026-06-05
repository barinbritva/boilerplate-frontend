export class Configuration {
	public readonly apiUrl: string = '/api';

	constructor() {
		if (__APP_ENV__ == null) {
			throw new Error('Environment variables are not set.');
		}

		// validate env here
	}
}
