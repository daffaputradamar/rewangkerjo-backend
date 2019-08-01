import { Request, Response } from "express"
import * as jwt from "jsonwebtoken"
import { User } from "../models/User"

export class UserController {
  public index(req: Request, res: Response) {
    User.find({}).then((data) => res.json(data))
  }

  public show(req: Request, res: Response) {
    User.findById(req.params._id).then((data) => res.json(data))
  }

  public store(req: Request, res: Response) {
    User.create(req.body).then((data) => res.json(data))
  }

  public update(req: Request, res: Response) {
    User.findOneAndUpdate(
      { _id: req.params._id },
      { $set: req.body },
      { new: true },
    ).then((data) => res.json(data))
  }

  public destroy(req: Request, res: Response) {
    User.findOneAndDelete({ _id: req.params._id }).then((data) => res.json(data))
  }

  public authenticate(req: Request, res: Response) {
    User.find({ ...req.body }).then((user) => {
      jwt.sign(
        { user },
        `${process.env.JWT_SECRET}`,
        (err: any, token: any) => {
          if (err) {
            throw err
          }
          res.json({ token, user })
        },
      )
    })
  }
}
