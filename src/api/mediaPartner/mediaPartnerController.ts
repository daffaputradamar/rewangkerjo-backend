import { Request, Response } from "express"
import { MediaPartner } from "./mediaPartnerModel"

export class MediaPartnerController {
  public index(req: Request, res: Response) {
    MediaPartner.find({}).then((data) => res.json(data))
  }

  public store(req: Request, res: Response) {
    MediaPartner.create({ ...req.body }).then((data) => res.json(data))
  }

  public update(req: Request, res: Response) {
    MediaPartner.findOneAndUpdate(
      { _id: req.params._id },
      { $set: req.body },
      { new: true },
    ).then((data) => res.json(data))
  }

  public destroy(req: Request, res: Response) {
    MediaPartner.findOneAndDelete({ id: req.params._id }).then((data) =>
      res.json(data),
    )
  }
}
