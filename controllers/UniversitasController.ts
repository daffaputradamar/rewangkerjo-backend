import { Request, Response } from 'express'
import { Universitas } from "../models/Universitas"


export class UniversitasController {
    public show(req: Request, res: Response){
        Universitas.findById(req.params.id).then((data) => res.json(data));
    }
}