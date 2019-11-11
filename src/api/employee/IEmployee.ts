import { Document } from 'mongoose'
import { IUser } from '@config/interfaces/IUser'
import { IAssignment } from '@api/assignment/IAssignment'

export interface IEmployee extends Document, IUser {
    name: string
    address: string
    phone: string
    position: number
    assignments: string[] | IAssignment[]
}
