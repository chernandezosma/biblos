/**
 * General route file
 * It collects routes from all files in the folder and expose to the app
 *
 * @version     May 2019
 * @category    Routes
 * @package     Routes
 * @subpackage  Routes
 */

import apiRoutes from './apiv1'
import express from 'express'

let router = express.Router()
router.use('/v1/', apiRoutes)

router.use(function (req, res, next) {
  res.send(res.locals.data)
})

export default router
