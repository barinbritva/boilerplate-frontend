import {HttpStatus} from '#/core/http/HttpStatus.js';
import {HttpError} from './HttpError.js';

export class MethodNotAllowedError extends HttpError {
	constructor(message: string = 'Method Not Allowed') {
		super(HttpStatus.MethodNotAllowed, message);
	}
}
