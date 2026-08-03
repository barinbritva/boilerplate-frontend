import {HttpStatus} from '#/core/http/HttpStatus.js';
import {HttpError} from './HttpError.js';

export class MisdirectedRequestError extends HttpError {
	constructor(message: string = 'Misdirected Request') {
		super(HttpStatus.MisdirectedRequest, message);
	}
}
