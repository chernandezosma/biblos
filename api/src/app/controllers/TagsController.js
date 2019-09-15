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
import TagsRepository from '../repositories/tagsRepository'

export default class TagsController extends ApiController {

  constructor (apiController) {

    super();
    this.client = new MongooseConnection()
    this.apiController = apiController
  }

  /**
   * Return the JSON response with product identification.
   *
   * @returns {{product: string, version: string}}
   */
  getRoot = (req, res) => {
    res.statusCode = HTTP_CODES.HTTP_OK
    res.locals.data = {
      'data': {
        'message': 'Tags Root',
      },
    }

    return res
  }

  getResponse = (data, error) => {
    let response = this.apiController.getResponse(data, error)
    response.data = {
        'tags': data,
    }

    return response
  }

  /**
   * end-point to get all tags.
   *
   * @param req
   * @param res
   * @returns {Promise<void>}
   */
  getAllTags = async(req, res) => {

    const tagsRepo = new TagsRepository();

    let data = await tagsRepo.getAll(res);
    return this.getResponse(data.locals.data);
  }

  save = (req, res) => {
    res.statusCode = HTTP_CODES.HTTP_OK

    if (req.is('json') !== 'json') {
      res.statusCode = HTTP_CODES.HTTP_BAD_REQUEST
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
      res.statusCode = HTTP_CODES.HTTP_INTERNAL_SERVER_ERROR
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
