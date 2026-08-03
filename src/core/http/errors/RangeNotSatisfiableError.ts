import {HttpStatus} from '#/core/http/HttpStatus.js';
import {HttpError} from './HttpError.js';

export class RangeNotSatisfiableError extends HttpError {
	constructor(message: string = 'Range Not Satisfiable') {
		super(HttpStatus.RangeNotSatisfiable, message);
	}
}
