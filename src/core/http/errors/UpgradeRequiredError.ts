import {HttpStatus} from '#/core/http/HttpStatus.js';
import {HttpError} from './HttpError.js';

export class UpgradeRequiredError extends HttpError {
	constructor(message: string = 'Upgrade Required') {
		super(HttpStatus.UpgradeRequired, message);
	}
}
