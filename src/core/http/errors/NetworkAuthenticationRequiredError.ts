import {HttpStatus} from '~/core/http/HttpStatus';
import {HttpError} from './HttpError';

export class NetworkAuthenticationRequiredError extends HttpError {
	constructor(message: string = 'Network Authentication Required') {
		super(HttpStatus.NetworkAuthenticationRequired, message);
	}
}
