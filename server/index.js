require('dotenv').config()
const next = require('next')
const express = require('express')
const { ApolloServer } = require('apollo-server-express')
const schema = require('./schema')
const adminRouter = require('./admin')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

Promise.all([app.prepare(), adminRouter])
  .then((values) => {
    const expressApp = express()
    const apolloServer = new ApolloServer({
      schema: schema,
      cors: true,
      playground: true,
      introspection: true,
      tracing: true,
      path: '/',
    })
    apolloServer.applyMiddleware({ app: expressApp })
    expressApp.use('/admin', values[1])
    expressApp.get('*', (req, res) => handle(req, res))

    expressApp.listen(3000, (err) => {
      if (err) throw err
      console.log('> Ready on http://localhost:3000')
    })
  })
  .catch((e) => console.error(e))
