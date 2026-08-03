import {HttpStatus} from '#/core/http/HttpStatus.js';
import {HttpError} from './HttpError.js';

export class PayloadTooLargeError extends HttpError {
	constructor(message: string = 'Payload Too Large') {
		super(HttpStatus.PayloadTooLarge, message);
	}
}
