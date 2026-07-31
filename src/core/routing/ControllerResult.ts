import {Page} from '../presentation/Page';
import {Redirect} from './Redirect';

export type ControllerResult = Page<any> | Redirect;
