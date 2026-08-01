import {HttpStatus} from '~/core/http/HttpStatus';
import {HttpError} from './HttpError';

export class UnprocessableEntityError extends HttpError {
	constructor(message: string = 'Unprocessable Entity') {
		super(HttpStatus.UnprocessableEntity, message);
	}
}
