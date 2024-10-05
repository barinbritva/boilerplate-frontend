import {AlreadyAuthorizedError} from '../errors/AlreadyAuthorizedError';
import {BaseController, ControllerContext} from './BaseController';

export abstract class UnauthorizedZoneController extends BaseController {
	constructor(context: ControllerContext) {
		super(context);

		if (this.isUserSignedIn()) {
			throw new AlreadyAuthorizedError('User already authorized.');
		}
	}
}
