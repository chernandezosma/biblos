/**
 * Tags Repositories
 *
 * @version   Sept 2019
 * @category  Repositories
 * @package   Biblos
 * @subpackage Repositories
 */

import TagModel from '../models/tags'
import * as HTTP_CODES from '../config/httpcodes'
import MongooseConnection from '../../app/connectors/mongo'

export default class TagsRepository {

  /**
   * Constructor
   */
  constructor () {
    this.client = new MongooseConnection()
  }

  /**
   * Return all tags from MongoDB
   *
   * @returns {*}
   */
  getAll = (res) => {
    this.client.get()
    return TagModel.find({}, null).exec()
    .then((tags) => {
      res.statusCode = HTTP_CODES.HTTP_OK
      res.locals.data = tags

      return res
    }).catch((err) => {
      res.statusCode = HTTP_CODES.HTTP_INTERNAL_SERVER_ERROR
      throw err
    })
  }

}
