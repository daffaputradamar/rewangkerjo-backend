import { Request, Response } from "express"
import { Timeline } from "./timelineModel"

export class TimelineController {
  public index(req: Request, res: Response) {
    Timeline.find({}).then((data) => res.json(data))
  }

  public store(req: Request, res: Response) {
    Timeline.create({ ...req.body }).then((data) => res.json(data))
  }

  public destroy(req: Request, res: Response) {
    Timeline.findOneAndDelete({ _id: req.params._id }).then((data) =>
      res.json(data),
    )
  }

  public update(req: Request, res: Response) {
    Timeline.findOneAndUpdate(
      { _id: req.params._id },
      { $set: req.body },
      { new: true },
    ).then((data) => res.json(data))
  }
}
