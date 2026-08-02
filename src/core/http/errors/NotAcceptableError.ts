import {HttpStatus} from '~/core/http/HttpStatus';
import {HttpError} from './HttpError';

export class NotAcceptableError extends HttpError {
	constructor(message: string = 'Not Acceptable') {
		super(HttpStatus.NotAcceptable, message);
	}
}
