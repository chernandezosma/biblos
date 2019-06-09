/**
 * Mongo configuration for connections.
 *
 * @version     May 2019
 * @category    Configuration files.
 * @package     Config
 * @subpackage  Mongo
 */

import devConfig from './mongo.dev'
import prodConfig from './mongo.prod'

const MONGO_DEFAULT_CONFIG = {
  connectOptions: process.env.NODE_ENV === 'development'
      ? devConfig
      : prodConfig,
  mongos: {}
}

export default MONGO_DEFAULT_CONFIG
