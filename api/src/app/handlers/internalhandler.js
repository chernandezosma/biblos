/**
 * Internal Error handler.
 *
 * @version     May 2019
 * @category    Handlers
 * @package     Biblos
 * @subpackage  Error habdlers.
 */

import { APP_PORT } from '../config/biblos'
import logger from 'morgan'

export function onError (error) {
  if (error.syscall !== 'listen') {
    throw error
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + APP_PORT
    : 'Port ' + APP_PORT

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      logger.error(bind + ' requires elevated privileges')
      // eslint-disable-next-line no-console
      console.error(bind + ' requires elevated privileges')
      process.exit(1)
      break
    case 'EADDRINUSE':
      logger.error(bind + ' is already in use')
      // eslint-disable-next-line no-console
      console.error(bind + ' is already in use')
      process.exit(1)
      break
    default:
      throw error
  }
}