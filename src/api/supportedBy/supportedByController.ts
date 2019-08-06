import { Request, Response } from "express"
import { SupportedBy } from "./supportedByModel"

export class SupportedByController {
  public index(req: Request, res: Response) {
    SupportedBy.find({}).then((data) => res.json(data))
  }

  public store(req: Request, res: Response) {
    SupportedBy.create({ ...req.body }).then((data) => res.json(data))
  }

  public update(req: Request, res: Response) {
    SupportedBy.findOneAndUpdate(
      { _id: req.params._id },
      { $set: req.body },
      { new: true },
    ).then((data) => res.json(data))
  }

  public destroy(req: Request, res: Response) {
    SupportedBy.findOneAndDelete({ _id: req.params._id }).then((data) =>
      res.json(data),
    )
  }
}