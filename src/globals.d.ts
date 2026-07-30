interface Dict<T> {
	[key: string]: T | undefined;
}

declare global {
	var __APP_ENV__: Dict<string>;
}

export {};
