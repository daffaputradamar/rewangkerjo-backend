import { Document } from 'mongoose'
import { IEmployee } from '@api/employee/IEmployee'
import { ICategory } from '@api/category/ICategory'
import { IVendor } from '@api/vendor/IVendor'

export interface IEvent extends Document {
    client: string
    addressEvent: string
    phone: string
    pic: string | IEmployee
    category: string | ICategory
    committees?: string[] | IEmployee[]
    vendors?: string[] | IVendor[]
    isFinished: boolean
    assignments?: IAssignment[]
    createdAt: Date
}

interface IAssignment {
    assignment: string
    isFinished: boolean
}
