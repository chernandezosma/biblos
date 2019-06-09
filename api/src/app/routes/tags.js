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

const tagsRouter = express.Router()
let tagsController = new TagController()

/**
 * Route for API root
 *
 * @route: /tags/
 */
tagsRouter.route('/').get(function (req, res) {

  res.redirect('/api/v1/tags/tags')

})

/**
 * Route for all books as listing.
 *
 * @route: /tags/
 */
tagsRouter.route('/tags').get(function (req, res) {
  res = tagsController.getAll(req, res)
  res.json(res.locals.data)
})


tagsRouter.route('/tag').post(function (req, res){
  res = tagsController.save(req, res)
  res.json(res.locals.data);
})

export default tagsRouter
