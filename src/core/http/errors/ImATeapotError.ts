import {HttpStatus} from '~/core/http/HttpStatus';
import {HttpError} from './HttpError';

export class ImATeapotError extends HttpError {
	constructor(message: string = "I'm a Teapot") {
		super(HttpStatus.ImATeapot, message);
	}
}
