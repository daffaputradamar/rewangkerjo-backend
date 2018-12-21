import { Request, Response } from 'express'
import { Kontak } from '../models/Kontak'

export class KontakController {
  index(req: Request, res: Response) {
    Kontak.find({}).then(data => res.json(data))
  }

  store(req: Request, res: Response) {
    Kontak.create({ ...req.body.kontak }).then(data => res.json(data))
  }

  destroy(req: Request, res: Response) {
    Kontak.findOneAndDelete({ _id: req.params._id }).then(data =>
      res.json(data)
    )
  }
}
