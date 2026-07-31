import {Page} from '../entities/Page';
import {Redirect} from '../entities/Redirect';
import {AlreadyAuthorizedError} from '../../services/http/errors/AlreadyAuthorizedError';
import {UnauthorizedError} from '../../services/http/errors/UnauthorizedError';
import {ControllerResult} from '../interfaces/ControllerResult';
import {ErrorPage} from '../../views/pages/ErrorPage';
import {PageMetaBuilder} from '../../services/PageMetaBuilder';
import {RouteBuilder} from '../../services/RouteBuilder';

export class NavigationErrorResolver {
	private readonly routes: RouteBuilder;
	private readonly pageMetaBuilder: PageMetaBuilder;

	constructor(routes: RouteBuilder, pageMetaBuilder: PageMetaBuilder) {
		this.routes = routes;
		this.pageMetaBuilder = pageMetaBuilder;
	}

	resolve(error: unknown): ControllerResult {
		if (error instanceof UnauthorizedError) {
			return new Redirect(this.routes.signIn());
		}

		if (error instanceof AlreadyAuthorizedError) {
			return new Redirect(this.routes.root());
		}

		const normalizedError = error instanceof Error ? error : new Error(String(error));

		return new Page(
			ErrorPage,
			{templateProps: {}, message: normalizedError.message},
			this.pageMetaBuilder.build({title: 'Error'}),
		);
	}
}
