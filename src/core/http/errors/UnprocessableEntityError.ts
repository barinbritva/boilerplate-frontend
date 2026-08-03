import {HttpStatus} from '#/core/http/HttpStatus.js';
import {HttpError} from './HttpError.js';

export class UnprocessableEntityError extends HttpError {
	constructor(message: string = 'Unprocessable Entity') {
		super(HttpStatus.UnprocessableEntity, message);
	}
}
