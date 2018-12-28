import { Request, Response } from "express"
import { Sample } from "../models/Sample"

export class SampleController {
  public index(req: Request, res: Response) {
    Sample.find().then((data) => res.json(data))
  }

  public show(req: Request, res: Response) {
    Sample.findById(req.params._id).then((data) => res.json(data))
  }

  public store(req: Request, res: Response) {
    Sample.create(req.body.sample).then((data) => res.json(data))
  }

  public update(req: Request, res: Response) {
    Sample.findOneAndUpdate(
      { _id: req.params._id },
      { $set: req.body.sample },
      { new: true },
    ).then((data) => res.json(data))
  }

  public destroy(req: Request, res: Response) {
    Sample.findOneAndDelete({ _id: req.params._id }).then((data) =>
      res.json(data),
    )
  }
}
