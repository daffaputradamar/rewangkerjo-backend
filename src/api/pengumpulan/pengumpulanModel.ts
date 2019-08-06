import { model, Schema } from "mongoose"
import { IPengumpulan } from "./IPengumpulan"

const PengumpulanSchema = new Schema({
  jenisPengumpulan: {
    type: Schema.Types.ObjectId,
    ref: "JenisPengumpulan"
  },
  file: {
    type: String,
  },
  tim: {
    type: Schema.Types.ObjectId,
    ref: "Tim"
  }
})

export const Pengumpulan = model<IPengumpulan>(
  "Pengumpulan",
  PengumpulanSchema,
  "Pengumpulan",
)
