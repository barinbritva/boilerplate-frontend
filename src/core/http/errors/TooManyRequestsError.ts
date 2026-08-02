import {HttpStatus} from '~/core/http/HttpStatus';
import {HttpError} from './HttpError';

export class TooManyRequestsError extends HttpError {
	constructor(message: string = 'Too Many Requests') {
		super(HttpStatus.TooManyRequests, message);
	}
}
