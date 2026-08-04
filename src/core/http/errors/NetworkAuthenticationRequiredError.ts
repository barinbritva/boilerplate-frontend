import {HttpStatus} from '#/core/http/HttpStatus.js';
import {HttpError} from './HttpError.js';

export class NetworkAuthenticationRequiredError extends HttpError {
	constructor(message: string = 'Network Authentication Required') {
		super(HttpStatus.NetworkAuthenticationRequired, message);
	}
}
