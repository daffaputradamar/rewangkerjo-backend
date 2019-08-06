import { Request, Response } from "express"
import { JenisPengumpulan } from "./jenisPengumpulanModel"

export class JenisPengumpulanController {
  public index(req: Request, res: Response) {
    JenisPengumpulan
        .find({})
        .populate("timeline")
        .populate("status")
        .exec()
        .then((data) => res.json(data))
  }

  public store(req: Request, res: Response) {
    JenisPengumpulan.create({ ...req.body }).then((data) => res.json(data))
  }

  public update(req: Request, res: Response) {
    JenisPengumpulan.findOneAndUpdate(
      { _id: req.params._id },
      { $set: req.body },
      { new: true },
    ).then((data) => res.json(data))
  }

  public destroy(req: Request, res: Response) {
    JenisPengumpulan.findOneAndDelete({ _id: req.params._id }).then((data) =>
      res.json(data),
    )
  }
}
