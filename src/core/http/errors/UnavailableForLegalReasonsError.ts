import {HttpStatus} from '#/core/http/HttpStatus.js';
import {HttpError} from './HttpError.js';

export class UnavailableForLegalReasonsError extends HttpError {
	constructor(message: string = 'Unavailable For Legal Reasons') {
		super(HttpStatus.UnavailableForLegalReasons, message);
	}
}
