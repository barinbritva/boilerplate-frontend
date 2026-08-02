import {HttpStatus} from '~/core/http/HttpStatus';
import {HttpError} from './HttpError';

export class RequestTimeoutError extends HttpError {
	constructor(message: string = 'Request Timeout') {
		super(HttpStatus.RequestTimeout, message);
	}
}
