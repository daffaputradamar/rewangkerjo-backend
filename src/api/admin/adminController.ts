import { Request, Response } from "express"
import { Admin } from "./adminModel"
import { IAdmin } from "./IAdmin";

import { isPasswordMatch, createHash } from "@lib/bcryptPassword";
import { signJWT } from "@lib/signJWT";

export class AdminController {
  public index(req: Request, res: Response) {
    Admin.find({}).then((data) => res.json(data))
  }

  public show(req: Request, res: Response) {
    Admin.findById(req.params._id).then((data) => res.json(data))
  }

  public store(req: Request, res: Response) {
    let _admin = req.body
    createHash(_admin.password)
        .then(hashedPassword => {
            _admin.password = hashedPassword
            Admin.create({ ..._admin }).then((data) => res.json(data))
        })
  }

  public authenticate(req: Request, res: Response) {
    const { username, password } = req.body
    let user: IAdmin
    Admin.findOne({ username })
    .then(_user => {
        if (!_user) {
            res.json({
                success: false,
                error: "Username is not found"
            })
        }
        const __user = _user as IAdmin
        user = __user
        return isPasswordMatch(password, user.password)
    })
    .then(isMatch => {
        if (isMatch) {
            return signJWT(user)
        } else {
            res.json({
                success: false,
                error: "Password does not match"
            })
        }
    })
    .then(token => {
        res.json({
            success: true,
            token
        })
    })
    .catch(err => {
        throw err
    })
  }

  public update(req: Request, res: Response) {
    Admin.findOneAndUpdate(
      { _id: req.params._id },
      { $set: req.body },
      { new: true },
    ).then((data) => res.json(data))
  }

  public destroy(req: Request, res: Response) {
    Admin.findOneAndDelete({ _id: req.params._id }).then((data) =>
      res.json(data),
    )
  }
}
