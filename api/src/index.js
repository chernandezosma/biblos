import express from 'express'
import dotEnv from 'dotenv'
import logger from 'morgan'
import bodyparser from 'body-parser'

import { APP_PORT } from './app/config/biblos'


import routes from './app/routes/routes'
import { errorHandler } from './app/handlers/errorhandler'
import http404Handler from './app/handlers/404handler'

const envConfig = dotEnv.config().parsed
const app = express()

app.use(logger('dev'))
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: false }))
app.use(express.static(envConfig.DIST_DIR))
app.use('/', routes)
app.use(http404Handler)
app.use(errorHandler)

app.listen(APP_PORT, (port, err) => {
  if (err) {
    // eslint-disable-next-line no-console
    console.log('Could not start express server')
  } else {
    // eslint-disable-next-line no-console
    console.log(`Biblos is listening at port ` + APP_PORT)
    // eslint-disable-next-line no-console
    console.log('Press Ctrl+C to quit.')
  }
})