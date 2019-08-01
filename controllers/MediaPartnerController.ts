import { Request, Response } from "express"
import { MediaPartner } from "../models/MediaPartner"

export class MediaPartnerController {
  public index(req: Request, res: Response) {
    MediaPartner.find({}).then((data) => res.json(data))
  }

  public store(req: Request, res: Response) {
    MediaPartner.create({ ...req.body }).then((data) => res.json(data))
  }

  public destroy(req: Request, res: Response) {
    MediaPartner.findOneAndDelete({ id: req.params._id }).then((data) =>
      res.json(data),
    )
  }
}
