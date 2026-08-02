interface Dict<T> {
	[key: string]: T | undefined;
}

declare global {
	interface Window {
		APP_ENV: Dict<string>;
	}
}

export {};
