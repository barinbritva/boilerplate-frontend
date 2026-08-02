import {Page} from '~/core/presentation/Page';
import {Redirect} from './Redirect';

export type ControllerResult = Page<any> | Redirect;
