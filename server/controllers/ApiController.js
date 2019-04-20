/**
 * API Controller.
 *
 * @version     Apr 2019
 * @category    Controllers
 * @package     Biblos
 * @subpackage  API Subsystem
 */

const constants = require('../models/constants');

getResponseRecord = () => {
  return {
    status: 200,
    message: 'Proof of concept',
    data: {},
  };
};

/**
 *
 * @param request
 * @param status
 * @param data
 * @param message
 * @param extra
 * @param format
 *
 * @constructor
 */

const APIReponse = (
    request,
    status,
    data,
    message,
    extra,
    format = constants.JSON_FORMAT,
) => {
  let language = request.headers['accept-language'];

  if (!language) {
    language = 'EN';
  }

  if (!status) {
    status = 400;
  }

  if (!message) {
    message = getMessageFromLanguage(language, MESSAGE_FOR_UNKNOWN_ERROR);
  } else {
    message = getMessageFromLanguage(language, message);
  }

  ewResponse = getResponseRecord();
  response.status = status;
  response.message = message;
  response.language = language;
  response.data = data;

  console.log(response);
  console.log('APIController->response method');
};

module.exports = {
  APIResponse,
};