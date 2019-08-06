import { Request, Response } from "express"
import fs from "fs"
import { Peserta } from "./pesertaModel"

export class PesertaController {
    public index(req: Request, res: Response) {
        Peserta
            .find({
                tim: req.params._idtim
            })
            .then((data) => res.json(data))
    }

    public show(req: Request, res: Response) {
        Peserta.findById(req.params._id).then((data) => res.json(data))
    }

    public store(req: Request, res: Response) {
        Peserta.create(req.body).then((data) => res.json(data))
    }

    public update(req: Request, res: Response) {
        Peserta.findOneAndUpdate(
        { _id: req.params._id },
        { $set: req.body },
        { new: true },
        ).then((data) => res.json(data))
    }

    public async updateKtm(req: Request, res: Response) {
        const peserta = await Peserta.findById(req.params._id)
        if (peserta!.ktm) {
            fs.unlinkSync(`public/ktm/${peserta!.ktm!}`)
        }
        
        Peserta.findOneAndUpdate(
        { _id: req.params._id },
        { $set: { ktm: req.file.filename } },
        { new: true },
        ).then((data) => res.json(data))
    }

    public async updateFoto(req: Request, res: Response) {
        const peserta = await Peserta.findById(req.params._id)
        if (peserta!.foto) {
        fs.unlinkSync(`public/foto/${peserta!.foto!}`)
        }

        Peserta.findOneAndUpdate(
        { _id: req.params._id },
        { $set: { foto: req.file.filename } },
        { new: true },
        ).then((data) => res.json(data))
    }

    public destroy(req: Request, res: Response) {
        Peserta.findOneAndDelete({ _id: req.params._id }).then((data) =>
        res.json(data),
        )
    }
}
