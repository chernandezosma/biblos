/**
 * 404 Error handler
 *
 * @version     May 2019
 * @category    Error Handlers
 * @package     Biblos
 * @subpackage  Handlers
 */

import * as HTTP_CODES from '../../config/httpcodes.js'

// assume 404 since no middleware responded
const http404Handler = function (req, res, next) {
  res.status(HTTP_CODES.HTTP_NOT_FOUND).json({
    message: 'The requested resource cannot be found. (' + req.originalUrl +
      ')'
  })
  next()
}

export default http404Handler
