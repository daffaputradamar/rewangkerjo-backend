import { Document } from "mongoose"

export interface IMediaPartner extends Document {
  nama: string
  logo: string
}