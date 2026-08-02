import {HttpStatus} from '~/core/http/HttpStatus';
import {HttpError} from './HttpError';

export class ExpectationFailedError extends HttpError {
	constructor(message: string = 'Expectation Failed') {
		super(HttpStatus.ExpectationFailed, message);
	}
}
