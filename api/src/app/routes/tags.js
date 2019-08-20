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
let tagsController = new TagController()

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

  const data = await(new Promise((resolve, reject)  => {
    try {
      let tags = tagsController.getAll(req, res)
      res.status = HTTP_CODES.HTTP_OK
      res.locals.data = {
        'data': {
          'tags': [
            tags,
          ],
        },
      }

      resolve ()
    }catch (err) {
      reject (err)
    }
  }));

  await res.json(data);
})


tagsRouter.route('/tag').post((req, res) => {
  res = tagsController.save(req, res)
  res.json(res.locals.data);
})

export default tagsRouter
