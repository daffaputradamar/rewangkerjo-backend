import { Document } from "mongoose"

export interface IHadiah extends Document {
  judul: string
  nominal: number
}