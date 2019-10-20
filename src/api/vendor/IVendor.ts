import { Document } from 'mongoose'

export interface IVendor extends Document {
    name: string
    phone: string
}
