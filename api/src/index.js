import express from 'express'
import dotEnv from 'dotenv'
import './test'

const envConfig = dotEnv.config().parsed
const app = express()

app.use(express.static(envConfig.DIST_DIR))
app.get('*', (req, res) => {
  res.send('Welcome to BIBLOS API v.1.0.')
})

app.listen(3000, () => {
  console.log(`App listening to 3000...`)
  console.log('Press Ctrl+C to quit.')
})