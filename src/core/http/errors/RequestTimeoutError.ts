import {HttpStatus} from '#/core/http/HttpStatus.js';
import {HttpError} from './HttpError.js';

export class RequestTimeoutError extends HttpError {
	constructor(message: string = 'Request Timeout') {
		super(HttpStatus.RequestTimeout, message);
	}
}
