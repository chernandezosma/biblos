/**
 * Books related routes
 *
 * @version     May 2019
 * @category    Routes
 * @package     Biblos
 * @subpackage  Routes
 */

import express from 'express'
import globalRoutes from './global'
import booksRoutes from './books'

const apiRouter = express.Router()
apiRouter.use('/', globalRoutes)
apiRouter.use('/books', booksRoutes)

export default apiRouter
