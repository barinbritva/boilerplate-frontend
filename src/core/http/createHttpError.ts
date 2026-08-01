import {HttpStatus} from '~/core/http/HttpStatus';
import {BadGatewayError} from './errors/BadGatewayError';
import {BadRequestError} from './errors/BadRequestError';
import {ConflictError} from './errors/ConflictError';
import {ExpectationFailedError} from './errors/ExpectationFailedError';
import {FailedDependencyError} from './errors/FailedDependencyError';
import {ForbiddenError} from './errors/ForbiddenError';
import {GatewayTimeoutError} from './errors/GatewayTimeoutError';
import {GoneError} from './errors/GoneError';
import {HttpError} from './errors/HttpError';
import {HttpVersionNotSupportedError} from './errors/HttpVersionNotSupportedError';
import {ImATeapotError} from './errors/ImATeapotError';
import {InsufficientStorageError} from './errors/InsufficientStorageError';
import {InternalServerError} from './errors/InternalServerError';
import {LengthRequiredError} from './errors/LengthRequiredError';
import {LockedError} from './errors/LockedError';
import {LoopDetectedError} from './errors/LoopDetectedError';
import {MethodNotAllowedError} from './errors/MethodNotAllowedError';
import {MisdirectedRequestError} from './errors/MisdirectedRequestError';
import {NetworkAuthenticationRequiredError} from './errors/NetworkAuthenticationRequiredError';
import {NotAcceptableError} from './errors/NotAcceptableError';
import {NotExtendedError} from './errors/NotExtendedError';
import {NotFoundError} from './errors/NotFoundError';
import {NotImplementedError} from './errors/NotImplementedError';
import {PayloadTooLargeError} from './errors/PayloadTooLargeError';
import {PaymentRequiredError} from './errors/PaymentRequiredError';
import {PreconditionFailedError} from './errors/PreconditionFailedError';
import {PreconditionRequiredError} from './errors/PreconditionRequiredError';
import {ProxyAuthenticationRequiredError} from './errors/ProxyAuthenticationRequiredError';
import {RangeNotSatisfiableError} from './errors/RangeNotSatisfiableError';
import {RequestHeaderFieldsTooLargeError} from './errors/RequestHeaderFieldsTooLargeError';
import {RequestTimeoutError} from './errors/RequestTimeoutError';
import {ServiceUnavailableError} from './errors/ServiceUnavailableError';
import {TooEarlyError} from './errors/TooEarlyError';
import {TooManyRequestsError} from './errors/TooManyRequestsError';
import {UnauthorizedError} from './errors/UnauthorizedError';
import {UnavailableForLegalReasonsError} from './errors/UnavailableForLegalReasonsError';
import {UnprocessableEntityError} from './errors/UnprocessableEntityError';
import {UnsupportedMediaTypeError} from './errors/UnsupportedMediaTypeError';
import {UpgradeRequiredError} from './errors/UpgradeRequiredError';
import {UriTooLongError} from './errors/UriTooLongError';
import {VariantAlsoNegotiatesError} from './errors/VariantAlsoNegotiatesError';

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
