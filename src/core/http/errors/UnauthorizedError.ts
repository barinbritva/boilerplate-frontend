import {HttpStatus} from '~/core/http/HttpStatus';
import {HttpError} from './HttpError';

export class UnauthorizedError extends HttpError {
	constructor(message: string = 'Unauthorized') {
		super(HttpStatus.Unauthorized, message);
	}
}
