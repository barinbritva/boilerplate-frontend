import {BrowserHistory, createBrowserHistory, Location} from 'history';
import {Middleware, Pipeline} from '../utils/Pipeline';

export type {Location};

export interface NavigationContext {
	link: string;
}

export class BrowserNavigation {
	public readonly history: BrowserHistory;
	private readonly pipeline: Pipeline<NavigationContext>;

	constructor() {
		this.history = createBrowserHistory();
		this.pipeline = Pipeline<NavigationContext>((ctx, next) => {
			this.history.push({pathname: ctx.link});
			next();
		});
	}

	public go(link: string): Promise<void> {
		return this.pipeline.execute({link});
	}

	public addMiddleware(middleware: Middleware<NavigationContext>): void {
		this.pipeline.unshift(middleware);
	}

	public removeMiddleware(middleware: Middleware<NavigationContext>): void {
		this.pipeline.remove(middleware);
	}
}
