import {HttpStatus} from '#/core/http/HttpStatus.js';
import {BadGatewayError} from './errors/BadGatewayError.js';
import {BadRequestError} from './errors/BadRequestError.js';
import {ConflictError} from './errors/ConflictError.js';
import {ExpectationFailedError} from './errors/ExpectationFailedError.js';
import {FailedDependencyError} from './errors/FailedDependencyError.js';
import {ForbiddenError} from './errors/ForbiddenError.js';
import {GatewayTimeoutError} from './errors/GatewayTimeoutError.js';
import {GoneError} from './errors/GoneError.js';
import {HttpError} from './errors/HttpError.js';
import {HttpVersionNotSupportedError} from './errors/HttpVersionNotSupportedError.js';
import {ImATeapotError} from './errors/ImATeapotError.js';
import {InsufficientStorageError} from './errors/InsufficientStorageError.js';
import {InternalServerError} from './errors/InternalServerError.js';
import {LengthRequiredError} from './errors/LengthRequiredError.js';
import {LockedError} from './errors/LockedError.js';
import {LoopDetectedError} from './errors/LoopDetectedError.js';
import {MethodNotAllowedError} from './errors/MethodNotAllowedError.js';
import {MisdirectedRequestError} from './errors/MisdirectedRequestError.js';
import {NetworkAuthenticationRequiredError} from './errors/NetworkAuthenticationRequiredError.js';
import {NotAcceptableError} from './errors/NotAcceptableError.js';
import {NotExtendedError} from './errors/NotExtendedError.js';
import {NotFoundError} from './errors/NotFoundError.js';
import {NotImplementedError} from './errors/NotImplementedError.js';
import {PayloadTooLargeError} from './errors/PayloadTooLargeError.js';
import {PaymentRequiredError} from './errors/PaymentRequiredError.js';
import {PreconditionFailedError} from './errors/PreconditionFailedError.js';
import {PreconditionRequiredError} from './errors/PreconditionRequiredError.js';
import {ProxyAuthenticationRequiredError} from './errors/ProxyAuthenticationRequiredError.js';
import {RangeNotSatisfiableError} from './errors/RangeNotSatisfiableError.js';
import {RequestHeaderFieldsTooLargeError} from './errors/RequestHeaderFieldsTooLargeError.js';
import {RequestTimeoutError} from './errors/RequestTimeoutError.js';
import {ServiceUnavailableError} from './errors/ServiceUnavailableError.js';
import {TooEarlyError} from './errors/TooEarlyError.js';
import {TooManyRequestsError} from './errors/TooManyRequestsError.js';
import {UnauthorizedError} from './errors/UnauthorizedError.js';
import {UnavailableForLegalReasonsError} from './errors/UnavailableForLegalReasonsError.js';
import {UnprocessableEntityError} from './errors/UnprocessableEntityError.js';
import {UnsupportedMediaTypeError} from './errors/UnsupportedMediaTypeError.js';
import {UpgradeRequiredError} from './errors/UpgradeRequiredError.js';
import {UriTooLongError} from './errors/UriTooLongError.js';
import {VariantAlsoNegotiatesError} from './errors/VariantAlsoNegotiatesError.js';

type HttpErrorConstructor = new () => HttpError;

const errorConstructors: Record<HttpStatus, HttpErrorConstructor> = {
	[HttpStatus.BadRequest]: BadRequestError,
	[HttpStatus.Unauthorized]: UnauthorizedError,
	[HttpStatus.PaymentRequired]: PaymentRequiredError,
	[HttpStatus.Forbidden]: ForbiddenError,
	[HttpStatus.NotFound]: NotFoundError,
	[HttpStatus.MethodNotAllowed]: MethodNotAllowedError,
	[HttpStatus.NotAcceptable]: NotAcceptableError,
	[HttpStatus.ProxyAuthenticationRequired]: ProxyAuthenticationRequiredError,
	[HttpStatus.RequestTimeout]: RequestTimeoutError,
	[HttpStatus.Conflict]: ConflictError,
	[HttpStatus.Gone]: GoneError,
	[HttpStatus.LengthRequired]: LengthRequiredError,
	[HttpStatus.PreconditionFailed]: PreconditionFailedError,
	[HttpStatus.PayloadTooLarge]: PayloadTooLargeError,
	[HttpStatus.UriTooLong]: UriTooLongError,
	[HttpStatus.UnsupportedMediaType]: UnsupportedMediaTypeError,
	[HttpStatus.RangeNotSatisfiable]: RangeNotSatisfiableError,
	[HttpStatus.ExpectationFailed]: ExpectationFailedError,
	[HttpStatus.ImATeapot]: ImATeapotError,
	[HttpStatus.MisdirectedRequest]: MisdirectedRequestError,
	[HttpStatus.UnprocessableEntity]: UnprocessableEntityError,
	[HttpStatus.Locked]: LockedError,
	[HttpStatus.FailedDependency]: FailedDependencyError,
	[HttpStatus.TooEarly]: TooEarlyError,
	[HttpStatus.UpgradeRequired]: UpgradeRequiredError,
	[HttpStatus.PreconditionRequired]: PreconditionRequiredError,
	[HttpStatus.TooManyRequests]: TooManyRequestsError,
	[HttpStatus.RequestHeaderFieldsTooLarge]: RequestHeaderFieldsTooLargeError,
	[HttpStatus.UnavailableForLegalReasons]: UnavailableForLegalReasonsError,
	[HttpStatus.InternalServerError]: InternalServerError,
	[HttpStatus.NotImplemented]: NotImplementedError,
	[HttpStatus.BadGateway]: BadGatewayError,
	[HttpStatus.ServiceUnavailable]: ServiceUnavailableError,
	[HttpStatus.GatewayTimeout]: GatewayTimeoutError,
	[HttpStatus.HttpVersionNotSupported]: HttpVersionNotSupportedError,
	[HttpStatus.VariantAlsoNegotiates]: VariantAlsoNegotiatesError,
	[HttpStatus.InsufficientStorage]: InsufficientStorageError,
	[HttpStatus.LoopDetected]: LoopDetectedError,
	[HttpStatus.NotExtended]: NotExtendedError,
	[HttpStatus.NetworkAuthenticationRequired]: NetworkAuthenticationRequiredError,
};

export function createHttpError(status: number): HttpError {
	const ErrorConstructor = errorConstructors[status as HttpStatus];
	return ErrorConstructor ? new ErrorConstructor() : new HttpError(status, `HTTP Error ${status}`);
}
