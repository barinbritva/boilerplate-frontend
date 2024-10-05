import {ControllerResult} from '../interfaces/ControllerResult';
import {UnauthorizedZoneController} from './UnauthorizedZoneController';

export class SignInController extends UnauthorizedZoneController {
	public override handle(): Promise<ControllerResult> | ControllerResult {
		throw new Error('Method not implemented.');
	}
}
