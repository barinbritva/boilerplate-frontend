import {HttpStatus} from '#/core/http/HttpStatus.js';
import {HttpError} from './HttpError.js';

export class ServiceUnavailableError extends HttpError {
	constructor(message: string = 'Service Unavailable') {
		super(HttpStatus.ServiceUnavailable, message);
	}
}
