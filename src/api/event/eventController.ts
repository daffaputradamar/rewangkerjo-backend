import { Request, Response } from 'express'
import { Event } from './eventModel'
import { IEvent } from './IEvent'

import { forceCast } from '@lib/forceCast'
import { responseBody, responseBodyError } from '@lib/response'
import { ObjectId } from 'bson'

export class EventController {
    public async index(req: Request, res: Response) {
        res.json(await Event.find().populate('category'))
    }

    public async show(req: Request, res: Response) {
        if (!ObjectId.isValid(req.params._id)) {
            responseBodyError(res, 'Invalid Id')
        }
        const event = await Event.findById(req.params._id)
            .populate('committees')
            .populate('pic')
            .populate('category')
            .populate('vendors')
            .exec()
        responseBody(res, event)
    }

    public async store(req: Request, res: Response) {
        let _newEvent = forceCast<IEvent>(req.body)
        const newEvent = await Event.create(_newEvent)
        responseBody(res, newEvent)
    }

    public async update(req: Request, res: Response) {
        const updatedEvent = await Event.findByIdAndUpdate(
            req.params._id,
            { $set: req.body },
            { new: true }
        )
        responseBody(res, updatedEvent)
    }

    public async destroy(req: Request, res: Response) {
        if (!ObjectId.isValid(req.params._id)) {
            responseBodyError(res, 'Invalid Id')
        }
        const deletedEvent = await Event.findByIdAndDelete(req.params._id)
        responseBody(res, deletedEvent)
    }
}
