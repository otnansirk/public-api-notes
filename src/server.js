const Hapi = require('@hapi/hapi')
const routes = require('./routes')

const init = async () => {
  const server = Hapi.server({
    host: process.env.NODE_ENV !== 'production' ? 'localhost': '0.0.0.0',
    port: 5001,
    routes: {
      cors: {
        origin: ['*']
      }
    }
  })

  server.route(routes)

  await server.start()
  console.log('Server running on %s', server.info.uri)
}

init()
