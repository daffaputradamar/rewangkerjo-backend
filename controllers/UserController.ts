import { Request, Response } from "express"
import { User } from "../models/User"

export class UserController {
  index(req: Request, res: Response) {
    User.find({}).then(data => res.json(data))
  }

  store(req: Request, res: Response) {
    User.create(req.body.user).then(data => res.json(data))
  }

  update(req: Request, res: Response) {
    User.findOneAndUpdate(
      { _id: req.params._id },
      { $set: req.body.user },
      { new: true }
    ).then(data => res.json(data))
  }

  destroy(req: Request, res: Response) {
    User.findOneAndDelete({ _id: req.params._id }).then(data => res.json(data))
  }
}
