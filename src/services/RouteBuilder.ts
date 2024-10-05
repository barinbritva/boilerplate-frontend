export enum Route {
	SignIn = '/sign-in',
	Root = '/'
}

export class RouteBuilder {
	public signIn(): string {
		return this.substituteParameters(Route.SignIn);
	}

	public root(): string {
		return this.substituteParameters(Route.Root);
	}

	private substituteParameters(route: Route, params?: {[key: string]: string | string[]}): string {
		let path = '';
		if (params == null) {
			// just remove placeholder
			path = route.replace(/\/:(.*?)\?/gm, '');
		} else {
			path = route.replace(/\?*:*/gim, '');
			Object.keys(params).forEach((key) => {
				const value = params[key];
				if (value) {
					path = path.replace(key, Array.isArray(value) ? value.join(',') : value);
				}
			});
		}

		return path;
	}
}
