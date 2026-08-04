import {HttpStatus} from '#/core/http/HttpStatus.js';
import {HttpError} from './HttpError.js';

export class NotFoundError extends HttpError {
	constructor(message: string = 'Not Found') {
		super(HttpStatus.NotFound, message);
	}
}
