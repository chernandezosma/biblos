/**
 * Mongo related functions
 *
 * @version     May 2019
 * @category    Connectors
 * @package     Biblos
 * @subpackage  Mongo Connector.
 */

import mongoose from 'mongoose'
import mongoConfig from '../../config/mongo'

export const mongoConnection = function (res, req, next) {
  return mongoose.connect(mongoConfig.MONGO_URI, mongoConfig)
}
