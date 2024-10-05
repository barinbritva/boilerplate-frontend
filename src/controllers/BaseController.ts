import {RouteContext} from 'universal-router';
import {Meta} from '../entities/Page';
import {AppContext} from '../interfaces/AppContext';
import {ControllerResult} from '../interfaces/ControllerResult';
import {CommonTemplateProps} from '../views/templates/CommonTemplate';
import {MenuItem} from '../views/molecules/Menu';

export interface ControllerContext extends AppContext, RouteContext {}

export abstract class BaseController {
	constructor(protected readonly context: ControllerContext) {}

	public abstract handle(): Promise<ControllerResult> | ControllerResult;

	public isUserSignedIn(): boolean {
		return this.context.user.isSignedIn();
	}

	public getBaseProps(): CommonTemplateProps {
		const menuItems: MenuItem[] = [];

		return {
			account: this.context.user,
			menuItems,
			homeItem: {
				icon: 'Megaphone',
				label: 'Home',
				handler: '/'
			}
		};
	}

	protected buildPageMeta(title?: string | string[], favicon?: string): Meta {
		const {defaultPageMeta} = this.context;
		const titleParts =
			typeof title === 'undefined' ? [] : typeof title === 'string' ? [title] : title;

		return new Meta(
			[...titleParts, defaultPageMeta.title].join(' • '),
			favicon ?? defaultPageMeta.favicon
		);
	}
}
