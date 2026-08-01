import {HttpStatus} from '~/core/http/HttpStatus';
import {HttpError} from './HttpError';

export class MisdirectedRequestError extends HttpError {
	constructor(message: string = 'Misdirected Request') {
		super(HttpStatus.MisdirectedRequest, message);
	}
}
