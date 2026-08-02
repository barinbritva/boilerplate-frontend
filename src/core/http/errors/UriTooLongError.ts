import {HttpStatus} from '~/core/http/HttpStatus';
import {HttpError} from './HttpError';

export class UriTooLongError extends HttpError {
	constructor(message: string = 'URI Too Long') {
		super(HttpStatus.UriTooLong, message);
	}
}
