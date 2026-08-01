import {HttpStatus} from '~/core/http/HttpStatus';
import {HttpError} from './HttpError';

export class LockedError extends HttpError {
	constructor(message: string = 'Locked') {
		super(HttpStatus.Locked, message);
	}
}
