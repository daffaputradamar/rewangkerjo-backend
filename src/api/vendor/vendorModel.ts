import { model, Schema } from 'mongoose'
import { IVendor } from './IVendor'

const VendorSchema = new Schema({
    name: String,
    phone: String,
})

export const Vendor = model<IVendor>('Vendor', VendorSchema)
