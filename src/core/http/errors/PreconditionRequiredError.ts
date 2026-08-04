import {HttpStatus} from '#/core/http/HttpStatus.js';
import {HttpError} from './HttpError.js';

export class PreconditionRequiredError extends HttpError {
	constructor(message: string = 'Precondition Required') {
		super(HttpStatus.PreconditionRequired, message);
	}
}
