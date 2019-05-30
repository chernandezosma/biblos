/**
 * Error handler
 *
 * @version     May 2019
 * @category    Handlers
 * @package     Biblos
 * @subpackage  Error habdlers.
 */

import * as HTTP_CODES from '../../config/httpcodes.js'

const errorHandler = function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // return the error message.
  res.status(err.status || HTTP_CODES.HTTP_INTERNAL_SERVER_ERROR)
  res.send('error: ' + err.status
    ? err.message
    : 'Unexpected error has been occurred')
}

export { errorHandler }