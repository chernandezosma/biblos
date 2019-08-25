/**
 * Tags model.
 *
 * @version     Jun 2019
 * @category    Models
 * @package     Biblos
 * @subpackage  Schemas
 */

import mongoose from 'mongoose'

const Schema = mongoose.Schema

const tagsSchema = new Schema({

  code: {
    type: String,
    required: true,
    unique: true,
  },
  tagText: {
    type: String,
    required: true,
  },
})

tagsSchema.index({ 'code': 1 })
tagsSchema.index({ 'tagText': 1 })

// specify the transform schema option
if (!tagsSchema.options.toObject) {
  tagsSchema.options.toObject = {};
}

tagsSchema.options.toObject.transform = (doc, ret, options) => {
  // remove the _id of every document before returning the result
  delete ret._id
  delete ret.__v
}

let tagsModel = mongoose.model('Tags', tagsSchema)

export default tagsModel