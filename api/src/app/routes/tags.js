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
import ApiController from '../controllers/ApiController'

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
  const tagsController = new TagController(new ApiController())
  await tagsController.getAll(req, res)

  res.json(res.locals.data);
})


tagsRouter.route('/tag').post((req, res) => {

  // const tagsController = new TagController(new ApiController())
  // await tagsController.save(req, res)

  res.json(res.locals.data);
})

export default tagsRouter
