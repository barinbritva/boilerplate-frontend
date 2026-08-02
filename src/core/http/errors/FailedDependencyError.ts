import {HttpStatus} from '~/core/http/HttpStatus';
import {HttpError} from './HttpError';

export class FailedDependencyError extends HttpError {
	constructor(message: string = 'Failed Dependency') {
		super(HttpStatus.FailedDependency, message);
	}
}
