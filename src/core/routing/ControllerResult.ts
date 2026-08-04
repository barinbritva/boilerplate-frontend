import {Page} from '#/core/presentation/Page.js';
import {Redirect} from './Redirect.js';

export type ControllerResult = Page<any> | Redirect;
