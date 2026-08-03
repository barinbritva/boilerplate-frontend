import {type ControllerResult} from './ControllerResult';

export interface Controller {
	handle(): Promise<ControllerResult> | ControllerResult;
}
