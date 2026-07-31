export class Configuration {
	constructor() {
		if (__APP_ENV__ == null) {
			throw new Error('Environment variables are not set.');
		}

		// validate env here
	}
}
