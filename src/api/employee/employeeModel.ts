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

EmployeeSchema.pre('remove', function(next) {
    const employee = this
    employee.model('Event').deleteOne({ committees: employee._id }, next)
})

export const Employee = model<IEmployee>('Employee', EmployeeSchema)
