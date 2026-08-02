import {HttpStatus} from '~/core/http/HttpStatus';
import {HttpError} from './HttpError';

export class ProxyAuthenticationRequiredError extends HttpError {
	constructor(message: string = 'Proxy Authentication Required') {
		super(HttpStatus.ProxyAuthenticationRequired, message);
	}
}
