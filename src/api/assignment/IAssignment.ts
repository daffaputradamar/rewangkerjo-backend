import { Document } from 'mongoose'
import { IEmployee } from '@api/employee/IEmployee'
import { IEvent } from '@api/event/IEvent'

export interface IAssignment extends Document {
    assignment: string
    isFinished: boolean
    employee: string | IEmployee
    event: string | IEvent
}
