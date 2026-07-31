import {HttpStatus} from '~/core/http/HttpStatus';
import {HttpError} from './HttpError';

export class NotFoundError extends HttpError {
	constructor(message: string = 'Not Found') {
		super(HttpStatus.NotFound, message);
	}
}
