import { Document } from "mongoose"

export interface IKontak extends Document {
    nama: string
    telp: string
}