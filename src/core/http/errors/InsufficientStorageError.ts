import {HttpStatus} from '#/core/http/HttpStatus.js';
import {HttpError} from './HttpError.js';

export class InsufficientStorageError extends HttpError {
	constructor(message: string = 'Insufficient Storage') {
		super(HttpStatus.InsufficientStorage, message);
	}
}
