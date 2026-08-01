import {HttpStatus} from '~/core/http/HttpStatus';
import {HttpError} from './HttpError';

export class UnavailableForLegalReasonsError extends HttpError {
	constructor(message: string = 'Unavailable For Legal Reasons') {
		super(HttpStatus.UnavailableForLegalReasons, message);
	}
}
