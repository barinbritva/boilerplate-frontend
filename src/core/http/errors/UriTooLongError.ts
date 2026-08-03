import {HttpStatus} from '#/core/http/HttpStatus.js';
import {HttpError} from './HttpError.js';

export class UriTooLongError extends HttpError {
	constructor(message: string = 'URI Too Long') {
		super(HttpStatus.UriTooLong, message);
	}
}
