import {HttpStatus} from '#/core/http/HttpStatus.js';
import {HttpError} from './HttpError.js';

export class FailedDependencyError extends HttpError {
	constructor(message: string = 'Failed Dependency') {
		super(HttpStatus.FailedDependency, message);
	}
}
