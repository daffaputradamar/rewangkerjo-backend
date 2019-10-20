import { model, Schema } from 'mongoose'
import { IEmployee } from './IEmployee'

const EmployeeSchema = new Schema({
    username: String,
    password: String,
    name: String,
    address: String,
    phone: String,
    position: Number,
})

export const Employee = model<IEmployee>('Employee', EmployeeSchema)
