/**
 * Mongo configuration for connections.
 *
 * @version     May 2019
 * @category    Configuration files.
 * @package     Config
 * @subpackage  Mongo
 */

export const MONGO_URL = 'mongodb://localhost'
export const MONGO_PORT = 27017
export const MONGO_DATABASE = 'biblos'
export const MONGO_URI = MONGO_URL + ':' + MONGO_PORT + '/' + MONGO_DATABASE

export const mongoConfig = {
  'useNewUrlParser': true,
  'useCreateIndex': true,
  'useFindAndModify': false,
  'autoIndex': false, // Don"t build indexes
  'reconnectTries': Number.MAX_VALUE, // Never stop trying to reconnect
  'reconnectInterval': 500, // Reconnect every 500ms
  'poolSize': 10, // Maintain up to 10 socket connections
  // If not connected, return errors immediately rather than waiting for reconnect
  'bufferMaxEntries': 0,
  'connectTimeoutMS': 10000, // Give up initial connection after 10 seconds
  'socketTimeoutMS': 45000, // Close sockets after 45 seconds of inactivity
  'family': 4, // Use IPv4, skip trying IPv6
}
