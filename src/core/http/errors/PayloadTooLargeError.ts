import {HttpStatus} from '~/core/http/HttpStatus';
import {HttpError} from './HttpError';

export class PayloadTooLargeError extends HttpError {
	constructor(message: string = 'Payload Too Large') {
		super(HttpStatus.PayloadTooLarge, message);
	}
}
