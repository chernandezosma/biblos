/**
 * Biblos Controller.
 *
 * @version     May 2019
 * @category    Controllers
 * @package     Biblos
 * @subpackage  Controllers
 */

export default class BooksController {
  getAllBooks = () => {
    return {
      'data': {
        'books': [
          {
            'id': 1,
            'title': '20000 leguas de viaje submarino'
          },
          {
            'id': 2,
            'title': 'De la tierra a la luna'
          }
        ]
      }
    }
  }
}
