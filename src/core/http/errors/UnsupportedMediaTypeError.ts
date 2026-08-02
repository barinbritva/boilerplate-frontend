import {HttpStatus} from '~/core/http/HttpStatus';
import {HttpError} from './HttpError';

export class UnsupportedMediaTypeError extends HttpError {
	constructor(message: string = 'Unsupported Media Type') {
		super(HttpStatus.UnsupportedMediaType, message);
	}
}
