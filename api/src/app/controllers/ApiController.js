/**
 * API Controller.
 *
 * @version     Jun 2019
 * @category    Controllers
 * @package     Biblos
 * @subpackage  Controllers
 */

import * as constants from '../config/biblos'
import * as HTTP_CODES from '../config/httpcodes'

export default class ApiController {

  /**
   * Return the JSON response with product identification.
   *
   * @returns {{product: string, version: string}}
   */
  getVersion  = (req, res) => {
    res.status = HTTP_CODES.HTTP_OK
    res.locals.data = {
      'product': 'Biblos API',
      'version': constants.API_VERSION
    }

    return res
  }

}
