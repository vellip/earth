const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  title: String,
  location: {
    type: {
      type: String,
      enum: ['Point'],
      required: true,
    },
    coordinates: {
      type: [Number],
      required: true,
    },
  },
})

module.exports = schema
