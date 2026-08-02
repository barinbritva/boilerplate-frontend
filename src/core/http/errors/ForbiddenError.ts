import {HttpStatus} from '~/core/http/HttpStatus';
import {HttpError} from './HttpError';

export class ForbiddenError extends HttpError {
	constructor(message: string = 'Forbidden') {
		super(HttpStatus.Forbidden, message);
	}
}
