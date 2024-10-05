import {HttpStatus} from '../types/HttpStatus';
import {HttpError} from './HttpError';

export class BadRequestError extends HttpError {
	constructor(message: string = 'Bad Request') {
		super(HttpStatus.NotFound, message);
	}
}
