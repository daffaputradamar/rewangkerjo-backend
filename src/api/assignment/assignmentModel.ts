import { model, Schema } from 'mongoose'
import { IAssignment } from './IAssignment'

const AssignmentSchema = new Schema({
    assignment: String,
    isFinished: Boolean,
    employee: {
        type: Schema.Types.ObjectId,
        ref: 'Employee',
    },
    event: {
        type: Schema.Types.ObjectId,
        ref: 'Event',
    },
})

export const Assignment = model<IAssignment>('Assignment', AssignmentSchema)
