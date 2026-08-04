import {HttpStatus} from '#/core/http/HttpStatus.js';
import {HttpError} from './HttpError.js';

export class ImATeapotError extends HttpError {
	constructor(message: string = "I'm a Teapot") {
		super(HttpStatus.ImATeapot, message);
	}
}
