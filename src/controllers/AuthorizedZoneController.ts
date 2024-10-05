import {UnauthorizedError} from '../errors/UnauthorizedError';
import {BaseController, ControllerContext} from './BaseController';

export abstract class AuthorizedZoneController extends BaseController {
	constructor(context: ControllerContext) {
		super(context);

		if (!this.isUserSignedIn()) {
			throw new UnauthorizedError();
		}
	}
}
