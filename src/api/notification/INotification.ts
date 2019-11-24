import { Document } from 'mongoose'

// type:
// 1 = acara,
// 2 = penugasan

export interface INotification extends Document {
    isRead: boolean
    type: number
    idReference: string
    user: string
    message: string
    createdAt: Date
}
