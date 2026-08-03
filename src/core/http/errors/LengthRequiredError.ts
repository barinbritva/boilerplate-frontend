import {HttpStatus} from '#/core/http/HttpStatus.js';
import {HttpError} from './HttpError.js';

export class LengthRequiredError extends HttpError {
	constructor(message: string = 'Length Required') {
		super(HttpStatus.LengthRequired, message);
	}
}
