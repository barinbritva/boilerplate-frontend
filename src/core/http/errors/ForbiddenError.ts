import {HttpStatus} from '#/core/http/HttpStatus.js';
import {HttpError} from './HttpError.js';

export class ForbiddenError extends HttpError {
	constructor(message: string = 'Forbidden') {
		super(HttpStatus.Forbidden, message);
	}
}
