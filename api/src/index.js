import express from 'express'
import dotEnv from 'dotenv'
import logger from 'morgan'
import { APP_PORT } from './config/biblos'
import routes from './routes/routes'
import { errorHandler } from './app/handlers/errorhandler'

const envConfig = dotEnv.config().parsed
const app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(envConfig.DIST_DIR))
app.use('/', routes)
app.use(errorHandler)

app.listen(APP_PORT, () => {
  console.log(`Biblos is listening at port ` + APP_PORT)
  console.log('Press Ctrl+C to quit.')
})
