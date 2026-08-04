import {type ControllerResult} from './ControllerResult.js';

export interface Controller {
	handle(): Promise<ControllerResult> | ControllerResult;
}
