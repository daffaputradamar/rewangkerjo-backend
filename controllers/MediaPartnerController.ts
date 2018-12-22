import { Request, Response } from 'express'
import { MediaPartner } from '../models/MediaPartner'

export class MediaPartnerController {
    index(req: Request, res: Response) {
        MediaPartner.find({}).then(data => res.json(data))
    }

    store(req: Request, res: Response) {
        MediaPartner.create({ ...req.body.mediaParter }).then(data => res.json(data))
    }

    destroy(req: Request, res: Response) {
        MediaPartner.findOneAndDelete({ id: req.params._id }).then(data => res.json(data))
    }
}

