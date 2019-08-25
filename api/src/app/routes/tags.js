/**
 * Tags Controller.
 *
 * @version
 * @category
 * @package
 * @subpackage
 */

import express from 'express'
import TagController from '../controllers/TagsController'
import * as HTTP_CODES from '../config/httpcodes'

const tagsRouter = express.Router()
// let tagsController = new TagController()

/**
 * Route for API root
 *
 * @route: /tags/
 */
tagsRouter.route('/').get((req, res) => {

  res.redirect('/api/v1/tags/tags')

})

/**
 * Route for all books as listing.
 *
 * @route: /tags/
 */
tagsRouter.route('/tags').get(async(req, res) => {

  const tagsController = new TagController()

  const data = await(new Promise((resolve, reject)  => {
    try {
      res.status = HTTP_CODES.HTTP_OK
      resolve (tagsController.getAll())
    }catch (err) {
      res.status = HTTP_CODES.HTTP_INTERNAL_SERVER_ERROR
      reject (err)
    }
  }));

  // await res.json(tagsController.jsonResponse(data));
  await res.json(tagsController.getResponse(data));
})


tagsRouter.route('/tag').post((req, res) => {

  const tagsController = new TagController()

  res = tagsController.save(req, res)
  res.json(res.locals.data);
})

export default tagsRouter
