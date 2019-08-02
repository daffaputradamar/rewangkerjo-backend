import { Request, Response } from "express"
import { Kontak } from "../models/Kontak"

export class KontakController {
  public index(req: Request, res: Response) {
    Kontak.find({}).then((data) => res.json(data))
  }

  public store(req: Request, res: Response) {
    Kontak.create({ ...req.body }).then((data) => res.json(data))
  }

  public update(req: Request, res: Response) {
    Kontak.findOneAndUpdate(
      { _id: req.params._id },
      { $set: req.body },
      { new: true },
    ).then((data) => res.json(data))
  }

  public destroy(req: Request, res: Response) {
    Kontak.findOneAndDelete({ _id: req.params._id }).then((data) =>
      res.json(data),
    )
  }
}
