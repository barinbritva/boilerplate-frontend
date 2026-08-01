import {HttpStatus} from '~/core/http/HttpStatus';
import {HttpError} from './HttpError';

export class UpgradeRequiredError extends HttpError {
	constructor(message: string = 'Upgrade Required') {
		super(HttpStatus.UpgradeRequired, message);
	}
}
