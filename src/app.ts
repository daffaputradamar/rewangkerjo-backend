import { config } from 'dotenv'
import 'module-alias/register'
config()

import router from '@config/routes'
import cors from 'cors'
import express, { Application, NextFunction, Request, Response } from 'express'
import morgan from 'morgan'

import '@config/db'

const app: Application = express()

app.use(morgan('tiny'))
app.use(cors())
app.use(express.json())

app.get('/', (req: Request, res: Response) => {
    res.send('Hello')
})
app.use(router)

app.listen(process.env.PORT || 5000, () => console.log('Server Running'))
