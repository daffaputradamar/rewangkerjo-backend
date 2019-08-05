import 'module-alias/register'
import { config } from 'dotenv'
config()

import express, { Application, Request, Response, NextFunction } from 'express'
import morgan from "morgan";
import cors from 'cors'
import router from "@config/routes";

import "@config/db";

const app: Application = express()

app.use(morgan('tiny'))
app.use(cors())
app.use(express.json())

app.get('/', (req: Request, res: Response) => {
    res.send("Hello")
})
app.use("/uploads/ktm", express.static("public/foto"));
app.use("/uploads/foto", express.static("public/foto"));
app.use(router)


app.listen(5000, () => console.log("Server Running"))