import { Document } from "mongoose"

export interface ISupportedBy extends Document {
    nama: string
    logo: string
}