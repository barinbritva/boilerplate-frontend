import {HttpStatus} from '#/core/http/HttpStatus.js';
import {HttpError} from './HttpError.js';

export class UnsupportedMediaTypeError extends HttpError {
	constructor(message: string = 'Unsupported Media Type') {
		super(HttpStatus.UnsupportedMediaType, message);
	}
}
