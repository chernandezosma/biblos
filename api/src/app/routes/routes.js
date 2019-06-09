/**
 * General route file
 * It collects routes from all files in the folder and expose to the app
 *
 * @version     May 2019
 * @category    Routes
 * @package     Routes
 * @subpackage  Routes
 */

import express from 'express'
import apiRoutes from './api'
import globalRoutes from './global'
import auth from '../middlewares/auth'

let router = express.Router()

router.use('/', globalRoutes)
router.use('/api/v1/', auth, apiRoutes)

export default router
