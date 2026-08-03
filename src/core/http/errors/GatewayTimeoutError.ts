import {HttpStatus} from '#/core/http/HttpStatus.js';
import {HttpError} from './HttpError.js';

export class GatewayTimeoutError extends HttpError {
	constructor(message: string = 'Gateway Timeout') {
		super(HttpStatus.GatewayTimeout, message);
	}
}
