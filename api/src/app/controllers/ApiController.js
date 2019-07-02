/**
 * API Controller.
 *
 * @version     Jun 2019
 * @category    Controllers
 * @package     Biblos
 * @subpackage  Controllers
 */

import * as HTTP_CODES from '../config/httpcodes'
import { API_VERSION } from '../config/biblos'

export default class ApiController {

  /**
   * Return the JSON response with product identification.
   *
   * @returns {{product: string, version: string}}
   */
  getVersion = (req, res) => {
    res.status = HTTP_CODES.HTTP_OK
    res.locals.data = {
      'title': 'Biblos API',
      'version': API_VERSION,
      'description': 'This is the Biblos API layer.',
      'termsOfService': 'http://www.elestadoweb.com/terms/',
      'contact': {
        'name': 'El Estado Web',
        'url': 'http://www.elestadoweb.com/support',
        'email': 'info@elestadoweb.com',
      },
      'license': {
        'name': 'GNU 3.0',
        'url': 'http://www.gnu.org/licenses/gpl-3.0.html',
      },
    }

    return res
  }

}
