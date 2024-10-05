import {createBrowserHistory, Location} from 'history';
import {Middleware, Pipeline} from './Pipeline';

export type {Location};
export const history = createBrowserHistory();
export interface NavigationContext {
	link: string;
}

const pipeline = Pipeline<NavigationContext>((ctx, next) => {
	history.push({pathname: ctx.link});
	next();
});

export function go(link: string): Promise<void> {
	return pipeline.execute({link: link});
}

export function addMiddleware(middleware: Middleware<NavigationContext>): void {
	pipeline.unshift(middleware);
}

export function removeMiddleware(middleware: Middleware<NavigationContext>): void {
	pipeline.remove(middleware);
}
