import {HttpStatus} from '~/core/http/HttpStatus';
import {HttpError} from './HttpError';

export class GatewayTimeoutError extends HttpError {
	constructor(message: string = 'Gateway Timeout') {
		super(HttpStatus.GatewayTimeout, message);
	}
}
