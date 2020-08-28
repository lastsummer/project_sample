import express, { Request, Response, NextFunction } from "express"
import { json } from 'body-parser'



const app = express()
app.use(json())

app.get('/health_check', (req: Request , res: Response)=>{
  res.status(200).send('OK')
})

app.use((err: Error, req: Request , res: Response, next: NextFunction)=>{
  res.status(500).json({message: err.message})
})

app.listen(6565)