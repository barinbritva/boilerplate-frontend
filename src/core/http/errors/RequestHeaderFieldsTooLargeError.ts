import {HttpStatus} from '#/core/http/HttpStatus.js';
import {HttpError} from './HttpError.js';

export class RequestHeaderFieldsTooLargeError extends HttpError {
	constructor(message: string = 'Request Header Fields Too Large') {
		super(HttpStatus.RequestHeaderFieldsTooLarge, message);
	}
}
