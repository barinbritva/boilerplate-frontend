import {HttpStatus} from '~/core/http/HttpStatus';
import {HttpError} from './HttpError';

export class PreconditionRequiredError extends HttpError {
	constructor(message: string = 'Precondition Required') {
		super(HttpStatus.PreconditionRequired, message);
	}
}
