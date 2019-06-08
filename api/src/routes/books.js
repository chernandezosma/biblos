/**
 * Books related routes
 *
 * @version     May 2019
 * @category    Routes
 * @package     Biblos
 * @subpackage  Routes
 */

import express from 'express'
import BooksController from '../app/controllers/BooksController'

const bookRoutes = express.Router()
let bookController = new BooksController()

/**
 * Route for API root
 */
bookRoutes.route('/').get(function (req, res, next) {

  try {
    res = bookController.getVersion(req, res, next)

    res.json(res.locals.data);

  } catch (error) {
    next(error)
  }
})

/**
 * Route for all books as listing.
 */
bookRoutes.route('/books').get(function (req, res) {

  res = bookController.getAllBooks(req, res)

  res.json(res.locals.data)
})

export default bookRoutes
