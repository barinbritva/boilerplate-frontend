import {HttpStatus} from '#/core/http/HttpStatus.js';
import {HttpError} from './HttpError.js';

export class PreconditionFailedError extends HttpError {
	constructor(message: string = 'Precondition Failed') {
		super(HttpStatus.PreconditionFailed, message);
	}
}
