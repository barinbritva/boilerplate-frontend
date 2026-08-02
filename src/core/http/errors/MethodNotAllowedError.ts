import {HttpStatus} from '~/core/http/HttpStatus';
import {HttpError} from './HttpError';

export class MethodNotAllowedError extends HttpError {
	constructor(message: string = 'Method Not Allowed') {
		super(HttpStatus.MethodNotAllowed, message);
	}
}
