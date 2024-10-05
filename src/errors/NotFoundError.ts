import {HttpStatus} from '../types/HttpStatus';
import {HttpError} from './HttpError';

export class NotFoundError extends HttpError {
	constructor(message: string = 'Not Found') {
		super(HttpStatus.NotFound, message);
	}
}
