const mongoose = require('mongoose')
const { composeMongoose } = require('graphql-compose-mongoose')

const schema = new mongoose.Schema({
  title: String,
  vimeo_id: { type: String, required: true, unique: true },
  description: String,
  hidden: { type: Boolean, default: true },
})

const model = mongoose.model('video', schema)

module.exports = {
  model,
  tc: composeMongoose(model),
}
