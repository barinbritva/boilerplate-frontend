import {HttpStatus} from '~/core/http/HttpStatus';
import {HttpError} from './HttpError';

export class ServiceUnavailableError extends HttpError {
	constructor(message: string = 'Service Unavailable') {
		super(HttpStatus.ServiceUnavailable, message);
	}
}
