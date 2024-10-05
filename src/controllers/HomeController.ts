import {ControllerResult} from '../interfaces/ControllerResult';
import {AuthorizedZoneController} from './AuthorizedZoneController';

export class HomeController extends AuthorizedZoneController {
	public override handle(): Promise<ControllerResult> | ControllerResult {
		throw new Error('Home page.');
	}
}
