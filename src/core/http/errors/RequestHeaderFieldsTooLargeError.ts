import {HttpStatus} from '~/core/http/HttpStatus';
import {HttpError} from './HttpError';

export class RequestHeaderFieldsTooLargeError extends HttpError {
	constructor(message: string = 'Request Header Fields Too Large') {
		super(HttpStatus.RequestHeaderFieldsTooLarge, message);
	}
}
