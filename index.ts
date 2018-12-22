import express from 'express'
import cors from 'cors'
import { SampleRouter } from './routers/SampleRouter'
import { SupportedByRouter } from './routers/SupportedByRouter'
import { KontakRouter } from './routers/KontakRouter'
import { MediaPartnerRouter } from './routers/MediaPartnerRouter';
import { UserRouter } from "./routers/UserRouter"

const app = express()

app.use(cors())
app.use(express.json())

app.use('/sample', SampleRouter)
app.use('/supportedBy', SupportedByRouter)
app.use('/kontak', KontakRouter)
app.use('/mediaPartner', MediaPartnerRouter)
app.use("/users", UserRouter)

app.listen(3000, () => console.log("service listening"))
