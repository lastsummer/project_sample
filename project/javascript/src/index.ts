import express, { Request, Response, NextFunction } from "express"
import { json } from 'body-parser'

import apiRoutes from './routes/api/'

const app = express();
app.use(json())

app.use('/api', apiRoutes)

app.use((err: Error, req: Request , res: Response, next: NextFunction)=>{
  res.status(500).json({message: err.message})
})

app.listen(8680)