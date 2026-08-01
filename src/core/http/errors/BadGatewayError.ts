import {HttpStatus} from '~/core/http/HttpStatus';
import {HttpError} from './HttpError';

export class BadGatewayError extends HttpError {
	constructor(message: string = 'Bad Gateway') {
		super(HttpStatus.BadGateway, message);
	}
}
