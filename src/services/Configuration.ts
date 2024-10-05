export class Configuration {
	public readonly telegramBotHandle: string;
	public readonly apiUrl: string = '/api';

	constructor() {
		if (window.env == null) {
			throw new Error('Environment is not set.');
		}

		if (window.env['TELEGRAM_BOT_HANDLE'] == null) {
			throw new Error('Failed to find all necessary environment variables.');
		}

		this.telegramBotHandle = window.env['TELEGRAM_BOT_HANDLE'];
	}
}
