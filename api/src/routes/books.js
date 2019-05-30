/**
 * Books related routes
 *
 * @version     May 2019
 * @category    Routes
 * @package     Biblos
 * @subpackage  Routes
 */

import express from 'express'
import * as HTTP_CODES from '../config/httpcodes.js'

const bookRoutes = express.Router()
bookRoutes.route('/').get(function (req, res, next) {
  // res.status(HTTP_CODES.HTTP_INTERNAL_SERVER_ERROR)
  // res.locals.data = {
  //   'code': 4895,
  //   'message': 'Something was wrong',
  // }

  res.status(HTTP_CODES.HTTP_OK)
  res.locals.data = [
    'books listing...',
  ]

  // Always call the next middleware, which compose the response.
  next()
})

export default bookRoutes
