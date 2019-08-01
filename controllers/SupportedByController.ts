import { Request, Response } from "express"
import { SupportedBy } from "../models/SupportedBy"

export class SupportedByController {
  public index(req: Request, res: Response) {
    SupportedBy.find({}).then((data) => res.json(data))
  }

  public store(req: Request, res: Response) {
    SupportedBy.create({ ...req.body }).then((data) => res.json(data))
  }

  public destroy(req: Request, res: Response) {
    SupportedBy.findOneAndDelete({ _id: req.params._id }).then((data) =>
      res.json(data),
    )
  }
}
