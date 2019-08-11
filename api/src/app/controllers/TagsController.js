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

export default class TagsController {

  constructor () {
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

  /**
   * Returns the data with books list.
   *
   * @returns {{data: {books: *[]}}}
   */
  getAll = (req, res) => {

    this.client.get()
    TagModel.find({}, null)
    .then ((tags, res) => {
      res.status = HTTP_CODES.HTTP_OK
      // eslint-disable-next-line no-console
      console.log('tags => ', tags)

      return tags;
    })
    .catch( (err, res) => {
      res.status = HTTP_CODES.HTTP_INTERNAL_SERVER_ERROR
      // eslint-disable-next-line no-console
      console.log('ERROR:', err)
    });

    //
    // res.status = status;
    // res.locals.data = {
    //   'data': {
    //     'tags': xxx,
    //   },
    // }

    return res;
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
