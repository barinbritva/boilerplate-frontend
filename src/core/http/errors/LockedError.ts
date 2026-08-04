import {HttpStatus} from '#/core/http/HttpStatus.js';
import {HttpError} from './HttpError.js';

export class LockedError extends HttpError {
	constructor(message: string = 'Locked') {
		super(HttpStatus.Locked, message);
	}
}
