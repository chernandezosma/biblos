/**
 * Books related routes
 *
 * @version     May 2019
 * @category    Routes
 * @package     Biblos
 * @subpackage  Routes
 */

import express from 'express'
import auth from '../middlewares/auth'
import ApiController from '../controllers/ApiController'
import bookRoutes from './books'
import tagsRoutes from './tags'

const apiRouter = express.Router()
let apiController = new ApiController()

apiRouter.route('/').get(function (req, res, next) {

  try {

    res = apiController.getVersion(req, res, next)
    res.json(res.locals.data);

  } catch (error) {

    next(error)

  }
})

// Other routes in API
apiRouter.use('/books', auth, bookRoutes)
apiRouter.use('/tags', auth, tagsRoutes)


export default apiRouter