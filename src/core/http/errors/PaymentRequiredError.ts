import {HttpStatus} from '~/core/http/HttpStatus';
import {HttpError} from './HttpError';

export class PaymentRequiredError extends HttpError {
	constructor(message: string = 'Payment Required') {
		super(HttpStatus.PaymentRequired, message);
	}
}
