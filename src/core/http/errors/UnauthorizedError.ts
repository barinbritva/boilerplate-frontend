import {HttpStatus} from '#/core/http/HttpStatus.js';
import {HttpError} from './HttpError.js';

export class UnauthorizedError extends HttpError {
	constructor(message: string = 'Unauthorized') {
		super(HttpStatus.Unauthorized, message);
	}
}
