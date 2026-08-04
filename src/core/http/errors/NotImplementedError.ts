import {HttpStatus} from '#/core/http/HttpStatus.js';
import {HttpError} from './HttpError.js';

export class NotImplementedError extends HttpError {
	constructor(message: string = 'Not Implemented') {
		super(HttpStatus.NotImplemented, message);
	}
}
