import {HttpStatus} from '#/core/http/HttpStatus.js';
import {HttpError} from './HttpError.js';

export class PaymentRequiredError extends HttpError {
	constructor(message: string = 'Payment Required') {
		super(HttpStatus.PaymentRequired, message);
	}
}
