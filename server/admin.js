const AdminBro = require('admin-bro')
const AdminBroExpress = require('@admin-bro/express')
const AdminBroMongoose = require('@admin-bro/mongoose')
const connection = require('./db')

AdminBro.registerAdapter(AdminBroMongoose)

module.exports = connection.then((connection) => {
  const adminBro = new AdminBro({
    databases: [connection],
    rootPath: '/admin',
    branding: {
      companyName: 'Earth',
    },
  })

  return AdminBroExpress.buildRouter(adminBro)
})
