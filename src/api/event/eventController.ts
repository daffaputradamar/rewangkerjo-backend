import { Request, Response } from 'express'
import { Event } from './eventModel'
import { IEvent } from './IEvent'

import { forceCast } from '@lib/forceCast'
import { responseBody, responseBodyError } from '@lib/response'
import { ObjectId } from 'bson'
import { Assignment } from '@api/assignment/assignmentModel'
import { Employee } from '@api/employee/employeeModel'
import { IAssignment } from '@api/assignment/IAssignment'

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
