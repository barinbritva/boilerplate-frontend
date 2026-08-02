import {HttpStatus} from '~/core/http/HttpStatus';
import {HttpError} from './HttpError';

export class PreconditionFailedError extends HttpError {
	constructor(message: string = 'Precondition Failed') {
		super(HttpStatus.PreconditionFailed, message);
	}
}
