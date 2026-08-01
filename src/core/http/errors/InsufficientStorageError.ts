import {HttpStatus} from '~/core/http/HttpStatus';
import {HttpError} from './HttpError';

export class InsufficientStorageError extends HttpError {
	constructor(message: string = 'Insufficient Storage') {
		super(HttpStatus.InsufficientStorage, message);
	}
}
