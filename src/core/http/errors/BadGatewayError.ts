import {HttpStatus} from '#/core/http/HttpStatus.js';
import {HttpError} from './HttpError.js';

export class BadGatewayError extends HttpError {
	constructor(message: string = 'Bad Gateway') {
		super(HttpStatus.BadGateway, message);
	}
}
