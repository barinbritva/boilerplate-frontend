import {HttpStatus} from '~/core/http/HttpStatus';
import {HttpError} from './HttpError';

export class NotImplementedError extends HttpError {
	constructor(message: string = 'Not Implemented') {
		super(HttpStatus.NotImplemented, message);
	}
}
