import {HttpStatus} from '#/core/http/HttpStatus.js';
import {HttpError} from './HttpError.js';

export class GoneError extends HttpError {
	constructor(message: string = 'Gone') {
		super(HttpStatus.Gone, message);
	}
}
