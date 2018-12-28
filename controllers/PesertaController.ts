import { Request, Response } from 'express'
import { Peserta } from '../models/Peserta'
import fs from 'fs'

export class PesertaController {
  public show(req: Request, res: Response) {
    Peserta.findById(req.params.idteam).then(data => res.json(data))
  }

  public store(req: Request, res: Response) {
    Peserta.create(req.body.peserta).then(data => res.json(data))
  }

  public update(req: Request, res: Response) {
    Peserta.findOneAndUpdate(
      { _id: req.params._id },
      { $set: req.body.peserta },
      { new: true }
    ).then(data => res.json(data))
  }

  public async updateKtm(req: Request, res: Response) {
    const peserta = await Peserta.findById(req.params._id)
    if (peserta!.ktm) fs.unlinkSync(peserta!.ktm!)

    Peserta.findOneAndUpdate(
      { _id: req.params._id },
      { $set: { ktm: req.file.path } },
      { new: true }
    ).then(data => res.json(data))
  }

  public async updateFoto(req: Request, res: Response) {
    const peserta = await Peserta.findById(req.params._id)
    if (peserta!.foto) fs.unlinkSync(peserta!.foto!)

    Peserta.findOneAndUpdate(
      { _id: req.params._id },
      { $set: { foto: req.file.path } },
      { new: true }
    ).then(data => res.json(data))
  }

  public destroy(req: Request, res: Response) {
    Peserta.findOneAndDelete({ _id: req.params._id }).then(data =>
      res.json(data)
    )
  }
}
