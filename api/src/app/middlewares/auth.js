/**
 * Authorization middleware
 *
 * @version     Jun 2019
 * @category    Authorization
 * @package     Biblos
 * @subpackage  Middlewares
 */
import { HTTP_OK } from '../../config/httpcodes'

const auth = (req, res, next) => {
  console.log('Auth method');
  next()
}

export default auth
