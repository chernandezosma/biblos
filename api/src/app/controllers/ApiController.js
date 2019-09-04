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
    res.statusCode = HTTP_CODES.HTTP_OK
    res.locals.data = this.getInfo()

    return res
  }

  getInfo = () => {
    return {
      'title': 'Biblos API',
      'version': API_VERSION,
      'description': 'This is the Biblos API layer.',
      'termsOfService': 'http://www.elestadoweb.com/terms/',
      'contact': this.getContact(),
      'licence': this.getLicence()
    }
  }

  getContact = () => {
    return {
      'name': 'El Estado Web',
      'url': 'http://www.elestadoweb.com/support',
      'email': 'info@elestadoweb.com',
    }
  }

  getLicence = () => {
    return {
      'name': 'GNU 3.0',
      'url': 'http://www.gnu.org/licenses/gpl-3.0.html',
    }
  }

  getResponse = (data, error) => {

    let response = this.getInfo()

    if (error !== undefined) {
      response.error = error

      return response;
    }

    return response
  }

}
