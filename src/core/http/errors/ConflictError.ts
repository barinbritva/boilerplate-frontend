import {HttpStatus} from '#/core/http/HttpStatus.js';
import {HttpError} from './HttpError.js';

export class ConflictError extends HttpError {
	constructor(message: string = 'Conflict') {
		super(HttpStatus.Conflict, message);
	}
}
