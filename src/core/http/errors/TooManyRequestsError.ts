import {HttpStatus} from '#/core/http/HttpStatus.js';
import {HttpError} from './HttpError.js';

export class TooManyRequestsError extends HttpError {
	constructor(message: string = 'Too Many Requests') {
		super(HttpStatus.TooManyRequests, message);
	}
}
