import {HttpStatus} from '#/core/http/HttpStatus.js';
import {HttpError} from './HttpError.js';

export class TooEarlyError extends HttpError {
	constructor(message: string = 'Too Early') {
		super(HttpStatus.TooEarly, message);
	}
}
