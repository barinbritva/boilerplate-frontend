import {HttpStatus} from '~/core/http/HttpStatus';
import {HttpError} from './HttpError';

export class NotExtendedError extends HttpError {
	constructor(message: string = 'Not Extended') {
		super(HttpStatus.NotExtended, message);
	}
}
