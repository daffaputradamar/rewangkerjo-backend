import { Request, Response } from 'express'
import { SupportedBy } from '../models/SupportedBy'

export class SupportedByController {
  index(req: Request, res: Response) {
    SupportedBy.find({}).then(data => res.json(data))
  }

  store(req: Request, res: Response) {
    SupportedBy.create({ ...req.body.supportedBy }).then(data => res.json(data))
  }

  destroy(req: Request, res: Response) {
    SupportedBy.findOneAndDelete({ _id: req.params._id }).then(data =>
      res.json(data)
    )
  }
}
