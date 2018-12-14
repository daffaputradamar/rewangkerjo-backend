import express from 'express'
import cors from 'cors'
import { SampleRouter } from './routers/SampleRouter'
import { SupportedByRouter } from './routers/SupportedByRouter'

const app = express()

app.use(cors())
app.use(express.json())

app.use('/sample', SampleRouter)
app.use('/supportedBy', SupportedByRouter)

app.listen(3000, () => console.log('service listening'))
