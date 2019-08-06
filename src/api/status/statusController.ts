import { Request, Response } from "express"
import { Status } from "./statusModel"

export class StatusController {
  public index(req: Request, res: Response) {
    Status.find({}).then((data) => res.json(data))
  }

  public store(req: Request, res: Response) {
    Status.create({ ...req.body }).then((data) => res.json(data))
  }

  public update(req: Request, res: Response) {
    Status.findOneAndUpdate(
      { _id: req.params._id },
      { $set: req.body },
      { new: true },
    ).then((data) => res.json(data))
  }

  public destroy(req: Request, res: Response) {
    Status.findOneAndDelete({ _id: req.params._id }).then((data) =>
      res.json(data),
    )
  }
}
