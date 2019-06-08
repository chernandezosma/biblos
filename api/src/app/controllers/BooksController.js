/**
 * Biblos Controller.
 *
 * @version     May 2019
 * @category    Controllers
 * @package     Biblos
 * @subpackage  Controllers
 */

import * as constants from '../../config/biblos'
import * as HTTP_CODES from '../../config/httpcodes'

export default class BooksController {

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

  /**
   * Returns the data with books list.
   *
   * @returns {{data: {books: *[]}}}
   */
  getAllBooks = (req, res) => {
    res.status = HTTP_CODES.HTTP_OK
    res.locals.data = {
      'data': {
        'books': [
          {
            'id': 1,
            'title': '20000 leguas de viaje submarino',
          },
          {
            'id': 2,
            'title': 'De la tierra a la luna',
          },
        ],
      },
    }

    return res
  }
}
