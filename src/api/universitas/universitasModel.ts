import { model, Schema } from "mongoose"
import { IUniversitas } from "./IUniversitas"

const UniversitasSchema = new Schema({
  nama: {
    type: String,
  },
})

export const Universitas = model<IUniversitas>(
  "Universitas",
  UniversitasSchema,
  "Universitas",
)
