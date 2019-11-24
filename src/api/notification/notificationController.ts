import { Request, Response } from 'express'
import { Notification } from './notificationModel'
import { responseBody } from '@lib/response'
import { INotification } from './INotification'

export class NotificationController {
    public async index(req: Request, res: Response) {
        const notifications: INotification[] = await Notification.find({
            $or: [{ isBroadcast: true }, { user: req.user.data._id }],
        })
            .sort('-createdAt')
            .limit(20)
            .exec()

        responseBody(res, notifications)
    }

    public async update(req: Request, res: Response) {
        await Notification.updateMany(
            {
                user: req.user.data._id,
            },
            {
                isRead: true,
            }
        )
        responseBody(res, {
            success: true,
        })
    }

    public async store(req: Request, res: Response) {
        const newNotification = await Notification.create(req.body)
        responseBody(res, newNotification)
    }
}
