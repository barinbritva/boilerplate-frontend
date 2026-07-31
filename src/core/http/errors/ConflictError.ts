import {HttpStatus} from '../HttpStatus';
import {HttpError} from './HttpError';

export class ConflictError extends HttpError {
	constructor(message: string = 'Conflict') {
		super(HttpStatus.Conflict, message);
	}
}
