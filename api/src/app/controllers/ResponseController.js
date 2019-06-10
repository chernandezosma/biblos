/**
 * Response Controller.
 *
 * @version     Jun 2019
 * @category    Controllers
 * @package     Biblos
 * @subpackage  Controllers
 */

import * as HTTP_CODES from '../config/httpcodes'

export default class ResponseController {

  /**
   * Compose the standard response for all API responses.
   *
   * @param req
   * @param res
   *
   * @returns {*}
   */
  composeResponse = (req, res) => {
    res.status = HTTP_CODES.HTTP_OK
    res.locals.data = {}

    return res
  }

}
