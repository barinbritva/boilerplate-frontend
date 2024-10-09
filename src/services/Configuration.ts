export class Configuration {
	public readonly apiUrl: string = '/api';

	constructor() {
		if (window.env == null) {
			throw new Error('Environment is not set.');
		}

		// validate env here
	}
}
