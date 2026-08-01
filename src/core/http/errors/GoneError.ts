import {HttpStatus} from '~/core/http/HttpStatus';
import {HttpError} from './HttpError';

export class GoneError extends HttpError {
	constructor(message: string = 'Gone') {
		super(HttpStatus.Gone, message);
	}
}
