/**
 * Authorization middleware
 *
 * @version     Jun 2019
 * @category    Authorization
 * @package     Biblos
 * @subpackage  Middlewares
 */

const auth = (req, res, next) => {
  // eslint-disable-next-line no-console
  console.log('Auth method');
  next()
}

export default auth
