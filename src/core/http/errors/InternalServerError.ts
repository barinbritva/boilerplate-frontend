import {HttpStatus} from '#/core/http/HttpStatus.js';
import {HttpError} from './HttpError.js';

export class InternalServerError extends HttpError {
	constructor(message: string = 'Internal Server Error') {
		super(HttpStatus.InternalServerError, message);
	}
}
