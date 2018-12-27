import { Request, Response } from 'express'
import { Tim } from '../models/Tim'

export class TimController {
  public index(req: Request, res: Response) {
    Tim.find().then(data => res.json(data))
  }

  public show(req: Request, res: Response) {
    Tim.findById(req.params._id).then(data => res.json(data))
  }

  public store(req: Request, res: Response) {
    Tim.create(req.body.tim).then(data => res.json(data))
  }

  public update(req: Request, res: Response) {
    Tim.findOneAndUpdate(
      { _id: req.params._id },
      { $set: req.body.tim },
      { new: true }
    ).then(data => res.json(data))
  }

  public destroy(req: Request, res: Response) {
    Tim.findOneAndDelete({ _id: req.params._id }).then(data =>
      res.json(data)
    )
  }
}
