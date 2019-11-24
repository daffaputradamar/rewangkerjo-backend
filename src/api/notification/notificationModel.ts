import { model, Schema } from 'mongoose'
import { INotification } from './INotification'

const NotificationSchema = new Schema({
    isRead: {
        type: Boolean,
        default: false,
    },
    type: Number,
    idReference: Schema.Types.ObjectId,
    user: Schema.Types.ObjectId,
    message: String,
    createdAt: {
        type: Date,
        default: Date.now(),
    },
})

export const Notification = model<INotification>(
    'Notification',
    NotificationSchema
)
