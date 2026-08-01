import {HttpStatus} from '~/core/http/HttpStatus';
import {HttpError} from './HttpError';

export class TooEarlyError extends HttpError {
	constructor(message: string = 'Too Early') {
		super(HttpStatus.TooEarly, message);
	}
}
