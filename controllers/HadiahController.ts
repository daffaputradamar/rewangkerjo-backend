import { Request, Response } from "express"
import { Hadiah } from "../models/Hadiah"

export class HadiahController {
  public index(req: Request, res: Response) {
    Hadiah.find({}).then((data) => res.json(data))
  }

  public store(req: Request, res: Response) {
    Hadiah.create({ ...req.body.hadiah }).then((data) => res.json(data))
  }

  public destroy(req: Request, res: Response) {
    Hadiah.findOneAndDelete({ _id: req.params._id }).then((data) =>
      res.json(data),
    )
  }
}
