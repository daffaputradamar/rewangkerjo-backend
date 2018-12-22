import { Request, Response } from 'express'
import { Universitas } from "../models/Universitas"


export class UniversitasController {
    public index(req: Request, res: Response){
        Universitas.find({}).then((data) => res.json(data));
    }
}