import {HttpStatus} from '~/core/http/HttpStatus';
import {HttpError} from './HttpError';

export class LoopDetectedError extends HttpError {
	constructor(message: string = 'Loop Detected') {
		super(HttpStatus.LoopDetected, message);
	}
}
