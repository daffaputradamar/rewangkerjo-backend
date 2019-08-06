import { model, Schema } from "mongoose"
import { IKontak } from "./IKontak"

const KontakSchema = new Schema({
  nama: {
    type: String,
  },
  telp: {
    type: String,
  },
})

export const Kontak = model<IKontak>(
    "Kontak",
    KontakSchema, 
    "Kontak"
)
