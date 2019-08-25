/**
 * Tags Controller.
 *
 * @version     Jun 2019
 * @category    Controllers
 * @package     Biblos
 * @subpackage  Controllers
 */

import TagModel from '../models/tags'
import * as HTTP_CODES from '../config/httpcodes'
import MongooseConnection from '../../app/connectors/mongo'
import ApiController from './ApiController'

export default class TagsController extends ApiController {

  constructor () {

    super();
    this.client = new MongooseConnection()

  }

  /**
   * Return the JSON response with product identification.
   *
   * @returns {{product: string, version: string}}
   */
  getRoot = (req, res) => {
    res.status = HTTP_CODES.HTTP_OK
    res.locals.data = {
      'data': {
        'message': 'Tags Root',
      },
    }

    return res
  }

  getResponse = (data, error) => {

    let response = super.getBasicResponse(data, error)

    response.data = {
        'tags': data,
    }

    return response
  }

  /**
   * Returns the data with books list.
   *
   * @returns {{data: {books: *[]}}}
   * @deprecated
   */
  OldgetAll = (req, res) => {

    let connection = this.client.get()
    // eslint-disable-next-line no-console
    console.log('connection:', connection)

    TagModel.find({}, null, (err, tags) => {
      if (err) {
        // eslint-disable-next-line no-console
        console.log('ERROR:', err)
      } else {
        // eslint-disable-next-line no-console
        console.log('tags => ', tags)

        res.status = HTTP_CODES.HTTP_OK
        res.locals.data = {
          'data': {
            'tags': [
              tags,
            ],
          },
        }
      }
    })

    return res
  }

  /**
   * Return all tags from MongoDB
   *
   * @returns {*}
   */
  getAll = () => {
    this.client.get()
    return TagModel.find({}, null).exec()
    .then((tags) => {
      return tags
    }).catch((err) => {
      throw err
    })
  }

  save = (req, res) => {
    res.status = HTTP_CODES.HTTP_OK

    if (req.is('json') !== 'json') {
      res.status = HTTP_CODES.HTTP_BAD_REQUEST
      res.locals.data = {
        'data': {
          'message': 'The body must be in JSON format.',
        },
      }

      return res
    }

    let tag = new TagModel()
    tag.code = req.body.code
    tag.tagText = req.body.text

    try {
      const result = tag.save()
      res.locals.data = {
        'data': {
          'message': 'Data successfully saved',
          'extra': result,
        },
      }
    } catch (err) {
      res.status = HTTP_CODES.HTTP_INTERNAL_SERVER_ERROR
      res.locals.data = {
        'data': {
          'message': err,
        },
      }
      return res
    }

    return res
  }
}
