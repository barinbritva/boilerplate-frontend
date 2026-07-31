import {ConflictError} from '../../../../core/http/errors/ConflictError';

export class AlreadyAuthorizedError extends ConflictError {}
