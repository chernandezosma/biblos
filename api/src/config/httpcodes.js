/**
 * HTTP Codes.
 *
 * @version     May 2019
 * @category    Configuration files.
 * @package     Config
 * @subpackage  HTTP Codes
 */

// Information responses
export const HTTP_CONTINUE = 100
export const HTTP_SWITCHING_PROTOCOLS = 101
export const HTTP_PROCESSING_WEBDAV = 102
export const HTTP_EARLY_HINTS = 103

// Successful responses
export const HTTP_OK = 200
export const HTTP_CREATED = 201
export const HTTP_ACCEPTED = 202
export const HTTP_NON_AUTHORITATIVE_INFORMATION = 203
export const HTTP_NO_CONTENT = 204
export const HTTP_RESET_CONTENT = 205
export const HTTP_PARTIAL_CONTENT = 206
export const HTTP_MULTI_STATUS = 207
export const HTTP_ALREADY_REPORTED = 208
export const HTTP_IM_USED = 226

// Redirection Messages
export const HTTP_MULTIPLE_CHOICES = 300
export const HTTP_MOVED_PERMANENTLY = 301
export const HTTP_FOUND = 302
export const HTTP_SEE_OTHER = 303
export const HTTP_NOT_MODIFIED = 304
export const HTTP_USE_PROXY = 305
export const HTTP_SWITCH_PROXY = 306
export const HTTP_TEMPORARY_REDIRECT = 307
export const HTTP_PERMANENT_REDIRECT = 308

// Client error responses
export const HTTP_BAD_REQUEST = 400
export const HTTP_UNAUTHORIZED = 401
export const HTTP_PAYMENT_REQUIRED = 402
export const HTTP_FORBIDDEN = 403
export const HTTP_NOT_FOUND = 404
export const HTTP_METHOD_NOT_ALLOWED = 405
export const HTTP_NOT_ACCEPTABLE = 406
export const HTTP_PROXY_AUTHENTICATION_REQUIRED = 407
export const HTTP_REQUEST_TIMEOUT = 408
export const HTTP_CONFLICT = 409
export const HTTP_GONE = 410
export const HTTP_LENGTH_REQUIRED = 411
export const HTTP_PRECONDITION_FAILED = 412
export const HTTP_REQUEST_ENTITY_TOO_LARGE = 413
export const HTTP_REQUEST_URI_TOO_LONG = 414
export const HTTP_UNSUPPORTED_MEDIA_TYPE = 415
export const HTTP_REQUESTED_RANGE_NOT_SATISFIABLE = 416
export const HTTP_EXPECTATION_FAILED = 417
export const HTTP_IM_A_TEAPOT = 418
export const HTTP_MISDIRECTED_REQUEST = 421
export const HTTP_UNPROCESSABLE_ENTITY = 422
export const HTTP_LOCKED = 423
export const HTTP_FAILED_DEPENDENCY = 424
export const HTTP_TOO_EARLY = 425
export const HTTP_UPGRADE_REQUIRED = 426
export const HTTP_PRECONDITION_REQUIRED = 428
export const HTTP_TOO_MANY_REQUESTS = 429
export const HTTP_REQUEST_HEADER_FIELDS_TOO_LARGE = 431
export const HTTP_UNAVAILABLE_FOR_LEGAL_REASONS = 451

// Server error responses
export const HTTP_INTERNAL_SERVER_ERROR = 500
export const HTTP_NOT_IMPLEMENTED = 501
export const HTTP_BAD_GATEWAY = 502
export const HTTP_SERVICE_UNAVAILABLE = 503
export const HTTP_GATEWAY_TIMEOUT = 504
export const HTTP_HTTP_VERSION_NOT_SUPPORTED = 505
export const HTTP_VARIANT_ALSO_NEGOTIATES = 506
export const HTTP_INSUFFICIENT_STORAGE = 507
export const HTTP_LOOP_DETECTED = 508
export const HTTP_NOT_EXTENDED = 510
export const HTTP_NETWORK_AUTHENTICATION_REQUIRED = 511

export const STATUS_MAP = {
  [HTTP_CONTINUE]: 'Continue',
  [HTTP_SWITCHING_PROTOCOLS]: 'Switching Protocols',
  [HTTP_PROCESSING_WEBDAV]: 'Processing (WEBDAV)',
  [HTTP_EARLY_HINTS]: 'Early Hints',
  [HTTP_OK]: 'OK',
  [HTTP_CREATED]: 'Created',
  [HTTP_ACCEPTED]: 'Accepted',
  [HTTP_NON_AUTHORITATIVE_INFORMATION]: 'Non-Authoritative Information',
  [HTTP_NO_CONTENT]: 'No Content',
  [HTTP_RESET_CONTENT]: 'Reset Content',
  [HTTP_PARTIAL_CONTENT]: 'Partial Content',
  [HTTP_MULTI_STATUS]: 'Multi Status',
  [HTTP_ALREADY_REPORTED]: 'Already Reported',
  [HTTP_IM_USED]: 'IM Used',
  [HTTP_MULTIPLE_CHOICES]: 'Multiple Choices',
  [HTTP_MOVED_PERMANENTLY]: 'Moved Permanently',
  [HTTP_FOUND]: 'Found',
  [HTTP_SEE_OTHER]: 'See Other',
  [HTTP_NOT_MODIFIED]: 'Not Modified',
  [HTTP_USE_PROXY]: 'Use Proxy',
  [HTTP_SWITCH_PROXY]: 'Switch Proxy',
  [HTTP_TEMPORARY_REDIRECT]: 'Temporary Redirect',
  [HTTP_PERMANENT_REDIRECT]: 'Permanent Redirect',
  [HTTP_BAD_REQUEST]: 'Bad Request',
  [HTTP_UNAUTHORIZED]: 'Unauthorized',
  [HTTP_PAYMENT_REQUIRED]: 'Payment Required',
  [HTTP_FORBIDDEN]: 'Forbidden',
  [HTTP_NOT_FOUND]: 'Not Found',
  [HTTP_METHOD_NOT_ALLOWED]: 'Method Not Allowed',
  [HTTP_NOT_ACCEPTABLE]: 'Not Acceptable',
  [HTTP_PROXY_AUTHENTICATION_REQUIRED]: 'Proxy Authentication Required',
  [HTTP_REQUEST_TIMEOUT]: 'Request Time-out',
  [HTTP_CONFLICT]: 'Conflict',
  [HTTP_GONE]: 'Gone',
  [HTTP_LENGTH_REQUIRED]: 'Length Required',
  [HTTP_PRECONDITION_FAILED]: 'Precondition Failed',
  [HTTP_REQUEST_ENTITY_TOO_LARGE]: 'Request Entity Too Large',
  [HTTP_REQUEST_URI_TOO_LONG]: 'Request-URI Too Large',
  [HTTP_UNSUPPORTED_MEDIA_TYPE]: 'Unsupported Media Type',
  [HTTP_REQUESTED_RANGE_NOT_SATISFIABLE]: 'Requested Range not Satisfiable',
  [HTTP_EXPECTATION_FAILED]: 'Expectation Failed',
  [HTTP_IM_A_TEAPOT]: 'I\'m a teapot',
  [HTTP_MISDIRECTED_REQUEST]: 'Misdirected Request',
  [HTTP_UNPROCESSABLE_ENTITY]: 'Unprocessable Entity',
  [HTTP_UPGRADE_REQUIRED]: 'Locked',
  [HTTP_PRECONDITION_REQUIRED]: 'Failed Dependency',
  [HTTP_LOCKED]: 'Upgrade Required',
  [HTTP_FAILED_DEPENDENCY]: 'Precondition Required',
  [HTTP_TOO_EARLY]: 'Too Early',
  [HTTP_TOO_MANY_REQUESTS]: 'Too Many Requests',
  [HTTP_REQUEST_HEADER_FIELDS_TOO_LARGE]: 'Request Header Fields Too Large',
  [HTTP_UNAVAILABLE_FOR_LEGAL_REASONS]: 'Unavailable For Legal Reasons',
  [HTTP_INTERNAL_SERVER_ERROR]: 'Internal Server Error',
  [HTTP_NOT_IMPLEMENTED]: 'Not Implemented',
  [HTTP_BAD_GATEWAY]: 'Bad Gateway',
  [HTTP_SERVICE_UNAVAILABLE]: 'Service Unavailable',
  [HTTP_GATEWAY_TIMEOUT]: 'Gateway Time-out',
  [HTTP_HTTP_VERSION_NOT_SUPPORTED]: 'HTTP Version not Supported',
  [HTTP_VARIANT_ALSO_NEGOTIATES]: 'Variant Also Negotiates',
  [HTTP_INSUFFICIENT_STORAGE]: 'Insufficient Storage',
  [HTTP_LOOP_DETECTED]: 'Loop Detected',
  [HTTP_NOT_EXTENDED]: 'Not Extended',
  [HTTP_NETWORK_AUTHENTICATION_REQUIRED]: 'Network Authentication Required',
}
