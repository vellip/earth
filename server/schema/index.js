const { schemaComposer } = require('graphql-compose')
const video = require('./video')
require('../db')

schemaComposer.Query.addFields({
  ...video.Query,
})

schemaComposer.Mutation.addFields({
  ...video.Mutation,
})

module.exports = schemaComposer.buildSchema()
