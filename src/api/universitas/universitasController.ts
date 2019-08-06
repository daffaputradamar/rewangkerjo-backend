import { Request, Response } from "express"
import { Universitas } from "./universitasModel"

export class UniversitasController {
  public index(req: Request, res: Response) {
    Universitas.find({}).then((data) => res.json(data))
  }

  public store(req: Request, res: Response) {
    Universitas.create({ ...req.body }).then((data) => res.json(data))
  }

  public update(req: Request, res: Response) {
    Universitas.findOneAndUpdate(
      { _id: req.params._id },
      { $set: req.body },
      { new: true },
    ).then((data) => res.json(data))
  }

  public destroy(req: Request, res: Response) {
    Universitas.findOneAndDelete({ _id: req.params._id }).then((data) =>
      res.json(data),
    )
  }
}