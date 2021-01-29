const { tc } = require('../models/video')

const Query = {
  videoMany: tc.mongooseResolvers.findMany(),
  videoById: tc.mongooseResolvers.findById(),
  videoOne: tc.mongooseResolvers.findOne(),
  videoCount: tc.mongooseResolvers.count(),
  videoConnection: tc.mongooseResolvers.connection(),
}

const Mutation = {
  videoCreateOne: tc.mongooseResolvers.createOne(),
  videoUpdateById: tc.mongooseResolvers.updateById(),
  videoRemoveById: tc.mongooseResolvers.removeById(),
  videoRemoveOne: tc.mongooseResolvers.removeOne(),
  videoRemoveMany: tc.mongooseResolvers.removeMany(),
}

module.exports = { Query, Mutation }
