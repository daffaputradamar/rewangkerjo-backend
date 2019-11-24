import { config } from 'dotenv'
import 'module-alias/register'
config()

import router from '@config/routes'
import cors from 'cors'
import express, { Application, NextFunction, Request, Response } from 'express'
import morgan from 'morgan'
import cron from 'node-cron'

import '@config/db'
import { cronJob } from '@lib/cronjob'

const app: Application = express()

app.use(morgan('tiny'))
app.use(cors())
app.use(express.json())

cron.schedule('0 1 * * *', cronJob)

app.get('/', (req: Request, res: Response) => {
    res.send('Hello')
})
app.use(router)

app.listen(process.env.PORT || 5000, () => console.log('Server Running'))
