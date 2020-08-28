import config from 'config'
import os from 'os'
import cluster from 'cluster'

import Start from './start'

const numCPUs = os.cpus().length <= 1 ? 2 : os.cpus().length
const workersCount = config.WORKERS_COUNT || numCPUs

if (cluster.isMaster) {
  console.log('Environment is', process.env.NODE_ENV)

  console.log(`Master pid:${process.pid} is running`)
  // Fork workers.
  for (let i = 0; i < workersCount; i += 1) {
    cluster.fork()
  }

  console.log(`
*****************************************
  server started on 
  host: ${config.HOST}
  port: ${config.PORT}
  NODE_ENV=${process.env.NODE_ENV} 
  DEBUG: ${process.env.DEBUG}
  workers: ${workersCount}
*****************************************
`)

  cluster.on('exit', (worker, code, signal) => {
    console.log(
      `worker ${worker.process.pid} died, code: ${code}, signal: ${signal}`
    )
  })
} else {
  Start()
}
