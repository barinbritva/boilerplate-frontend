import {ConflictError} from '#/core/http/errors/ConflictError.js';

export class AlreadyAuthorizedError extends ConflictError {}
