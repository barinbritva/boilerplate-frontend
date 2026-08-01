import {HttpStatus} from '~/core/http/HttpStatus';
import {HttpError} from './HttpError';

export class RangeNotSatisfiableError extends HttpError {
	constructor(message: string = 'Range Not Satisfiable') {
		super(HttpStatus.RangeNotSatisfiable, message);
	}
}
