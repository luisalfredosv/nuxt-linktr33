/* eslint-disable no-console */
import express from 'express'
import { Nuxt } from 'nuxt'
import { config } from 'dotenv'
import api from './routes'

config()

const app = express()
const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3000

app.all('*', function (req, res, next) {
  console.log('Setting headers...')
  res.header('Access-Control-Allow-Origin', process.env.BASE_URL_FRONT)
  res.header('Access-Control-Allow-Credentials', true)
  res.header('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  )
  next()
})

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.set('port', port)

app.use('/api', api)

async function start() {
  // Import and Set Nuxt.js options
  const config = require('../nuxt.config.js')
  config.dev = !(process.env.NODE_ENV === 'production')
  // Instanciate nuxt.js
  const nuxt = await new Nuxt(config)
  // Add nuxt.js middleware
  app.use(nuxt.render)
  // Build in development
  //   if (config.dev) {
  //       try {
  //           await nuxt.build()
  //       } catch (error) {
  //           console.error(error) // eslint-disable-line no-console
  //           process.exit(1)
  //       }
  //   }
  // Listen the server
  app.listen(port, host)
  console.log(`Server listening on ${host}:${port}`)
}

start()

// // Import and Set Nuxt.js options
// const config = require('../nuxt.config.js');

// config.dev = !(process.env.NODE_ENV === 'production');

// // Init Nuxt.js
// const nuxt = new Nuxt(config);

// // Build only in dev mode
// if (config.dev) {
//   const builder = new Builder(nuxt);
//   builder.build();
// }

// // Give nuxt middleware to express
// app.use(nuxt.render);

// // Listen the server
// app.listen(port, host);
// console.log(`Server listening on ${host}: ${port}`); // eslint-disable-line no-console
