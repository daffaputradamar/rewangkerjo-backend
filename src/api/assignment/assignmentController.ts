import { Request, Response } from 'express'
import { Assignment } from './assignmentModel'
import { IAssignment } from './IAssignment'
import { ObjectId } from 'bson'
import { forceCast } from '@lib/forceCast'
import { responseBody, responseBodyError } from '@lib/response'
import { Types } from 'mongoose'
import { Employee } from '@api/employee/employeeModel'
import { Event } from '@api/event/eventModel'
import { Notification } from '@api/notification/notificationModel'

const ObjectIdMongoose = Types.ObjectId

export class AssignmentController {
    public async index(req: Request, res: Response) {
        res.json(await Assignment.find())
    }

    public async show(req: Request, res: Response) {
        if (!ObjectId.isValid(req.params._id)) {
            responseBodyError(res, 'Invalid Id')
        }
        const category = await Assignment.findById(req.params._id)
        if (category) {
            responseBody(res, category)
        }
        responseBodyError(res, 'Assignment not found')
    }

    public async store(req: Request, res: Response) {
        let _newAssignment = forceCast<IAssignment>(req.body)
        const newAssignment = await Assignment.create(_newAssignment)
        const updateEmployee = await Employee.findById(_newAssignment.employee)
        if (updateEmployee) {
            updateEmployee.assignments = [
                ...updateEmployee.assignments,
                newAssignment._id,
            ]
            await updateEmployee.save()
        }
        const updateEvent = await Event.findById(_newAssignment.event)
        if (updateEvent) {
            updateEvent.assignments = [
                ...updateEvent.assignments,
                newAssignment._id,
            ]
            await updateEvent.save()
        }
        responseBody(res, newAssignment)
        await Notification.create({
            type: 2,
            idReference: _newAssignment.employee,
            user: _newAssignment.employee,
            message: 'Anda memiliki tugas baru',
        })
    }

    public async update(req: Request, res: Response) {
        if (!ObjectId.isValid(req.params._id)) {
            responseBodyError(res, 'Invalid Id')
        }
        const updatedAssignment = await Assignment.findByIdAndUpdate(
            req.params._id,
            { $set: req.body },
            { new: true }
        )
        responseBody(res, updatedAssignment)
    }

    public async destroy(req: Request, res: Response) {
        if (!ObjectId.isValid(req.params._id)) {
            responseBodyError(res, 'Invalid Id')
        }
        const deletedAssignment = await Assignment.findByIdAndDelete(
            req.params._id
        )

        if (deletedAssignment) {
            const updatedEvent = await Event.findOneAndUpdate(
                { _id: deletedAssignment.event },
                { $pull: { assignments: new ObjectIdMongoose(req.params._id) } }
            )
            const updatedEmployee = await Employee.findOneAndUpdate(
                { _id: deletedAssignment.employee },
                { $pull: { assignments: new ObjectIdMongoose(req.params._id) } }
            )
        }

        responseBody(res, deletedAssignment)
    }
}
