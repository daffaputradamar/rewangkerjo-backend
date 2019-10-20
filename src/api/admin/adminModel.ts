import { model, Schema } from 'mongoose'
import { IAdmin } from './IAdmin'

const AdminSchema = new Schema({
    username: String,
    password: String,
})

export const Admin = model<IAdmin>('Admin', AdminSchema)
