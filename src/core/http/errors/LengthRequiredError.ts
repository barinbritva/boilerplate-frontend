import {HttpStatus} from '~/core/http/HttpStatus';
import {HttpError} from './HttpError';

export class LengthRequiredError extends HttpError {
	constructor(message: string = 'Length Required') {
		super(HttpStatus.LengthRequired, message);
	}
}
