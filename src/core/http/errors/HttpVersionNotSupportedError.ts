import {HttpStatus} from '~/core/http/HttpStatus';
import {HttpError} from './HttpError';

export class HttpVersionNotSupportedError extends HttpError {
	constructor(message: string = 'HTTP Version Not Supported') {
		super(HttpStatus.HttpVersionNotSupported, message);
	}
}
