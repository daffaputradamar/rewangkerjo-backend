import { model, Schema } from 'mongoose'
import { IEvent } from './IEvent'

const EventSchema = new Schema({
    client: String,
    addressEvent: String,
    phone: String,
    pic: {
        type: Schema.Types.ObjectId,
        ref: 'Employee',
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
    },
    committees: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Employee',
        },
    ],
    vendors: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Vendor',
        },
    ],
    isFinished: {
        type: Boolean,
        default: false,
    },
    assignments: {
        type: [
            {
                assignment: String,
                isFinished: {
                    type: Boolean,
                    default: false,
                },
            },
        ],
        default: [],
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
})

export const Event = model<IEvent>('Event', EventSchema)
