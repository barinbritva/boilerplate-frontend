import {AppContext} from './interfaces/AppContext';

interface Dict<T> {
	[key: string]: T | undefined;
}

declare global {
	var __APP_ENV__: Dict<string>;
}

declare module 'universal-router' {
	export interface RouteContext extends AppContext {}
}
