import {HttpStatus} from '~/core/http/HttpStatus';
import {HttpError} from './HttpError';

export class VariantAlsoNegotiatesError extends HttpError {
	constructor(message: string = 'Variant Also Negotiates') {
		super(HttpStatus.VariantAlsoNegotiates, message);
	}
}
