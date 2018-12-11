const express = require('express')
const cors = require('cors')
const app = express()
const sampleRouter = require('./routers/sample')

app.use(cors())
app.use(express.json())

app.use('/sample', sampleRouter)

app.listen(3000, () => console.log('service listening'))
