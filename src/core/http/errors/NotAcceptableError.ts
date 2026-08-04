import {HttpStatus} from '#/core/http/HttpStatus.js';
import {HttpError} from './HttpError.js';

export class NotAcceptableError extends HttpError {
	constructor(message: string = 'Not Acceptable') {
		super(HttpStatus.NotAcceptable, message);
	}
}
