/**
 * Error handler
 *
 * @version     May 2019
 * @category    Handlers
 * @package     Biblos
 * @subpackage  Error habdlers.
 */

import * as HTTP_CODES from '../config/httpcodes.js'

const errorHandler = function (err, req, res) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.statusCode = err.status || HTTP_CODES.HTTP_INTERNAL_SERVER_ERROR
  res.locals = {}
  res.locals.error = {}

  if (req.app.get('env') === 'development') {
    res.locals.error = err.stack
  }

  res.send('error: ' + err.status
    ? err.message
    : 'Unexpected error has been occurred')
}

export { errorHandler }
