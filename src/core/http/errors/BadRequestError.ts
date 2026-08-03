import {HttpStatus} from '#/core/http/HttpStatus.js';
import {HttpError} from './HttpError.js';

export class BadRequestError extends HttpError {
	constructor(message: string = 'Bad Request') {
		super(HttpStatus.BadRequest, message);
	}
}
