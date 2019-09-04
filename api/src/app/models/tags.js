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
  options: {
    toObject: {
      hide: ['_id', '__v']
    },
    toJSON: {
      hide: ['_id', '__v']
    }
  }
})

tagsSchema.index({
  'code': 1,
  'tagText': 1
})

tagsSchema.options = {
  toObject: {
    transform: (doc, ret, options) => {
      if (options.hide) {
        options.hide.forEach(function (prop) {
          delete ret[prop];
        });
      }

      return ret;
    }
  },
  toJSON: {
    transform: (doc, ret, options) => {
      if (options.hide) {
        options.hide.forEach(function (prop) {
          delete ret[prop];
        });
      }

      return ret;
    }
  }
}

let tagsModel = mongoose.model('Tags', tagsSchema)

export default tagsModel