const mongoose = require('mongoose')
const { composeMongoose } = require('graphql-compose-mongoose')
const poiSchema = require('./poi')

const schema = new mongoose.Schema({
  title: String,
  vimeo_id: { type: String, required: true, unique: true },
  description: String,
  pois: [{ type: poiSchema }],
  hidden: { type: Boolean, default: true },
})

const model = mongoose.model('video', schema)

module.exports = {
  model,
  tc: composeMongoose(model),
  async getRandom() {
    return new Promise((resolve, reject) => {
      model.countDocuments().exec(function (err, count) {
        if (err) reject(err)
        const random = Math.floor(Math.random() * count)
        model.findOne().skip(random).exec().then(resolve).catch(reject)
      })
    })
  },
}
