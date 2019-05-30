/**
 * Global routes for general purporses.
 *
 * @version     May 2019
 * @package     Routes
 * @subpackage  General Routes
 */

import express from 'express'
import * as HTTP_CODES from '../config/httpcodes.js'
import * as config from '../config/biblos'

const globalRoutes = express.Router()
globalRoutes.route('/').get(function (req, res, next) {
  // res.status(HTTP_CODES.HTTP_INTERNAL_SERVER_ERROR)
  // res.locals.data = {
  //   'code': 4895,
  //   'message': 'Something was wrong',
  // }

  res.status(HTTP_CODES.HTTP_OK)
  res.locals.data = 'Biblos API version ' + config.API_VERSION

  // Always call the next middleware, which compose the response.
  next()
})

export default globalRoutes
