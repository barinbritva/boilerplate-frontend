import {HttpStatus} from '~/core/http/HttpStatus';
import {HttpError} from './HttpError';

export class InternalServerError extends HttpError {
	constructor(message: string = 'Internal Server Error') {
		super(HttpStatus.InternalServerError, message);
	}
}
