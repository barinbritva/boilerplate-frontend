import {Page} from '../entities/Page';
import {Redirect} from '../entities/Redirect';

export type ControllerResult<T = any> = Page<T> | Redirect;
