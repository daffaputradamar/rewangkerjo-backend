import { Request, Response } from "express"
import { Tim } from "./timModel"
import { ITim } from "./ITim";

import { isPasswordMatch, createHash } from "@lib/bcryptPassword";
import { signJWT } from "@lib/signJWT";

export class TimController {
  public index(req: Request, res: Response) {
    Tim
        .find({})
        .populate("universitas")
        .populate("ketua")
        .populate("status")
        .exec()
        .then((data) => res.json(data))
  }

  public show(req: Request, res: Response) {
    Tim
        .findById(req.params._id)
        .populate("universitas")
        .populate("ketua")
        .populate("status")
        .exec()
        .then((data) => res.json(data))
  }

  public store(req: Request, res: Response) {
    let _tim = req.body
    Tim.findOne({
      username: _tim.username
    })
      .then(__tim => {
        if (!__tim) {
          createHash(_tim.password)
              .then(hashedPassword => {
                  _tim.password = hashedPassword
                  Tim.create({ ..._tim }).then((data) => res.json(data))
              })
        } else {
          res.json({
            success: false,
            message: "Username is already exist"
          })
        }
      })
  }

  public authenticate(req: Request, res: Response) {
    const { username, password } = req.body
    let user: ITim
    Tim.findOne({ username })
    .populate("ketua")
    .populate("status")
    .populate("universitas")
    .then(_user => {
        if (!_user) {
            res.json({
                success: false,
                error: "Username is not found"
            })
        }
        const __user = _user as ITim
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
    Tim.findOneAndUpdate(
      { _id: req.params._id },
      { $set: req.body },
      { new: true },
    ).then((data) => res.json(data))
  }

  public destroy(req: Request, res: Response) {
    Tim.findOneAndDelete({ _id: req.params._id }).then((data) =>
      res.json(data),
    )
  }
}
