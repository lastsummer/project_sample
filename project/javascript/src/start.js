import config from 'config'
import express from 'express'
import bodyParser from 'body-parser'
import helmet from 'helmet'

import morgan from './morgan'

export default async () => {
  try {
    const server = express()
    server.use(
      bodyParser.json({
        limit: '50mb'
      })
    )
    server.use(
      bodyParser.urlencoded({
        limit: '50mb',
        extended: true
      })
    )
    server.use(helmet())
    
    morgan(server)

    
    
    server.get('/health_check', (req, res) => res.status(200).send('OK'))
    
    server.use(function (err, req, res, next) {
      handleErrorResponse(err, req, res, next)
    })

    server.listen(config.PORT, config.HOST, err => {
      if (err) throw err
      console.log(`> Worker pid:${process.pid} is running`)
      console.log(`> swagger endpoint: http://localhost:${config.PORT}/swagger`)
    })
  } catch (error) {
    console.log('error---->', error)
    console.log('An error occurred, unable to start the server')
    console.log(error)
  }
}
