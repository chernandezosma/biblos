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
tagsRouter.route('/').get((req, res) => {

  res.redirect('/api/v1/tags/tags')

})

tagsRouter.route('/julian').get(async (req, res) => {

  const data = await(new Promise((resolve, reject)  => {
    try {
      resolve ('Hello Julián')
    }catch (err) {
      reject (err)
    }
  }));

  await res.json(data);
})

/**
 * Route for all books as listing.
 *
 * @route: /tags/
 */
tagsRouter.route('/tags').get((req, res) => {

  // eslint-disable-next-line no-console
  console.log(' ====> before res => ', res)
  let response = tagsController.getAll(req, res)

  // eslint-disable-next-line no-console
  console.log(' ====> after response => ', response)

  res.json(response.locals.data)
})


tagsRouter.route('/tag').post((req, res) => {
  res = tagsController.save(req, res)
  res.json(res.locals.data);
})

export default tagsRouter
