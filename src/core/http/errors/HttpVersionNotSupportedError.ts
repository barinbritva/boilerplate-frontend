import {HttpStatus} from '#/core/http/HttpStatus.js';
import {HttpError} from './HttpError.js';

export class HttpVersionNotSupportedError extends HttpError {
	constructor(message: string = 'HTTP Version Not Supported') {
		super(HttpStatus.HttpVersionNotSupported, message);
	}
}
