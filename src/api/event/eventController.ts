import { Request, Response } from 'express'
import { Event } from './eventModel'
import { IEvent } from './IEvent'

import { forceCast } from '@lib/forceCast'
import { responseBody, responseBodyError } from '@lib/response'
import { ObjectId } from 'bson'
import { Assignment } from '@api/assignment/assignmentModel'
import { Employee } from '@api/employee/employeeModel'
import { IAssignment } from '@api/assignment/IAssignment'
import { Notification } from '@api/notification/notificationModel'
import { INotification } from '@api/notification/INotification'
import { Admin } from '@api/admin/adminModel'

const removeAssignment = async (filter: object): Promise<IAssignment[]> => {
    const deletedAssignment = await Assignment.find(filter)
    await Assignment.deleteMany(filter)
    return deletedAssignment
}

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
            .populate({
                path: 'assignments',
                populate: {
                    path: 'employee',
                },
            })
            .exec()
        responseBody(res, event)
    }

    public async store(req: Request, res: Response) {
        let _newEvent = forceCast<IEvent>(req.body)
        const newEvent = await Event.create(_newEvent)
        responseBody(res, newEvent)
        const allEmployeeIds = await Employee.find()
            .select('_id')
            .exec()
        const adminIds = await Admin.find()
            .select('_id')
            .exec()
        const ids = [...allEmployeeIds, ...adminIds]
        const message = 'Acara baru telah dibuat'
        const type = 1
        const idReference = newEvent._id
        const notifications = ids.map(id => {
            return {
                type,
                idReference,
                message,
                user: id,
            }
        })
        await Notification.insertMany(notifications)
    }

    public async update(req: Request, res: Response) {
        const event = await Event.findById(req.params._id)
        const updatedEvent = await Event.findByIdAndUpdate(
            req.params._id,
            { $set: req.body },
            { new: true }
        )
        responseBody(res, updatedEvent)
        if (updatedEvent) {
            if (req.body.isFinished) {
                const allEmployeeIds = await Employee.find()
                    .select('_id')
                    .exec()
                const adminIds = await Admin.find()
                    .select('_id')
                    .exec()
                const ids = [...allEmployeeIds, ...adminIds]
                const message = 'Acara telah selesai'
                const type = 1
                const idReference = updatedEvent._id
                const notifications = ids.map(id => {
                    return {
                        type,
                        idReference,
                        message,
                        user: id,
                    }
                })
                await Notification.insertMany(notifications)
            }
        }
        if (event && updatedEvent) {
            if (event.committees && updatedEvent.committees) {
                if (updatedEvent.committees.length > event.committees.length) {
                    const user =
                        updatedEvent.committees[
                            updatedEvent.committees.length - 1
                        ]
                    const message = 'Anda dimasukkan dalam kepanitiaan acara'
                    await Notification.create({
                        type: 1,
                        idReference: updatedEvent._id,
                        user,
                        message,
                    })
                }
            }
        }
    }

    public async destroy(req: Request, res: Response) {
        if (!ObjectId.isValid(req.params._id)) {
            responseBodyError(res, 'Invalid Id')
        }
        const deletedEvent = await Event.findByIdAndDelete(req.params._id)

        if (deletedEvent) {
            const deletedAssignment = await removeAssignment({
                event: deletedEvent._id,
            })
            const deletedAssignmentIds = deletedAssignment.map(
                assignment => assignment._id
            )
            const updatedEmployee = await Employee.updateMany(
                {
                    assignments: {
                        $in: deletedAssignmentIds,
                    },
                },
                {
                    $pull: {
                        assignments: {
                            $in: deletedAssignmentIds,
                        },
                    },
                }
            )
        }
        responseBody(res, deletedEvent)
    }
}
