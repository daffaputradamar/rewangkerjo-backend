import { Request, Response } from 'express'
import { Timeline } from '../models/Timeline'

export class TimelineController {
  index(req: Request, res: Response) {
    Timeline.find({}).then(data => res.json(data))
  }

  store(req: Request, res: Response) {
    Timeline.create({ ...req.body.timeline }).then(data => res.json(data))
  }

  destroy(req: Request, res: Response) {
    Timeline.findOneAndDelete({ _id: req.params._id }).then(data =>
      res.json(data)
    )
  }

  update(req: Request, res: Response) {
    Timeline.findOneAndUpdate(
      { _id: req.params._id },
      { $set: req.body.timeline },
      { new: true }
    ).then(data => res.json(data))
  }
}
