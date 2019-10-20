import { Document } from 'mongoose'
import { IUser } from '@config/interfaces/IUser'

export interface IEmployee extends Document, IUser {
    name: string
    address: string
    phone: string
    position: number
}
