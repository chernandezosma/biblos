/**
 *
 *
 * @version
 * @category
 * @package
 * @subpackage
 */

import express from 'express'
import BooksController from '../controllers/BooksController'

const bookRouter = express.Router()
let bookController = new BooksController()

/**
 * Route for Books root
 */
bookRouter.route('/').get(function (req, res, next) {

  try {
    res = bookController.getRoot(req, res, next)
    res.json(res.locals.data);
  } catch (error) {
    next(error)
  }
})

/**
 * Route for all books as listing.
 */
bookRouter.route('/books').get(function (req, res) {
  res = bookController.getAll(req, res)
  res.json(res.locals.data)
})

export default bookRouter
