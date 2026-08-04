import {HttpStatus} from '#/core/http/HttpStatus.js';
import {HttpError} from './HttpError.js';

export class ExpectationFailedError extends HttpError {
	constructor(message: string = 'Expectation Failed') {
		super(HttpStatus.ExpectationFailed, message);
	}
}
