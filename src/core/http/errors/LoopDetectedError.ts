import {HttpStatus} from '#/core/http/HttpStatus.js';
import {HttpError} from './HttpError.js';

export class LoopDetectedError extends HttpError {
	constructor(message: string = 'Loop Detected') {
		super(HttpStatus.LoopDetected, message);
	}
}
