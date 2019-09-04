/**
 * Books Controller.
 *
 * @version     May 2019
 * @category    Controllers
 * @package     Biblos
 * @subpackage  Controllers
 */

import * as HTTP_CODES from '../config/httpcodes'

export default class BooksController {

  /**
   * Return the JSON response with product identification.
   *
   * @returns {{product: string, version: string}}
   */
  getRoot  = (req, res) => {
    res.statusCode = HTTP_CODES.HTTP_OK
    res.locals.data = {
      'data': {
        'message': 'Books Root'
      }
    }

    return res
  }

  /**
   * Returns the data with books list.
   *
   * @returns {{data: {books: *[]}}}
   */
  getAll = (req, res) => {
    res.statusCode = HTTP_CODES.HTTP_OK
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
