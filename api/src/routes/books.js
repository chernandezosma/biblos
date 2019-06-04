/**
 * Books related routes
 *
 * @version     May 2019
 * @category    Routes
 * @package     Biblos
 * @subpackage  Routes
 */

import express from 'express'
import * as HTTP_CODES from '../config/httpcodes'
import * as constants from '../config/biblos'
import BooksController from '../app/controllers/BooksController'

const bookRoutes = express.Router()
bookRoutes.route('/').get(function (req, res) {
  res.status = HTTP_CODES.HTTP_OK
  res.locals.custom = true
  res.locals.data = { message: 'Biblo API version ' + constants.API_VERSION }
  res.json(res.locals.data)
})

bookRoutes.route('/books').get(function (req, res) {
  res.status = HTTP_CODES.HTTP_OK

  let bookController = new BooksController()
  res.locals.data = bookController.getAllBooks()
  res.json(res.locals.data)
})

export default bookRoutes
