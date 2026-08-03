import {HttpStatus} from '#/core/http/HttpStatus.js';
import {HttpError} from './HttpError.js';

export class NotExtendedError extends HttpError {
	constructor(message: string = 'Not Extended') {
		super(HttpStatus.NotExtended, message);
	}
}
