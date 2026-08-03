import {HttpStatus} from '#/core/http/HttpStatus.js';
import {HttpError} from './HttpError.js';

export class VariantAlsoNegotiatesError extends HttpError {
	constructor(message: string = 'Variant Also Negotiates') {
		super(HttpStatus.VariantAlsoNegotiates, message);
	}
}
