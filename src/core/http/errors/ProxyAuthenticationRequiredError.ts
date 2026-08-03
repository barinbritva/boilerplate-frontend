import {HttpStatus} from '#/core/http/HttpStatus.js';
import {HttpError} from './HttpError.js';

export class ProxyAuthenticationRequiredError extends HttpError {
	constructor(message: string = 'Proxy Authentication Required') {
		super(HttpStatus.ProxyAuthenticationRequired, message);
	}
}
