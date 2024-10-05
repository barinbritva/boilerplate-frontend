import {AppContext} from './interfaces/AppContext';

interface Dict<T> {
	[key: string]: T | undefined;
}

declare global {
	interface Window {
		env?: Dict<string>;
	}
}

declare module 'universal-router' {
	export interface RouteContext extends AppContext {}
}
