import { model, Schema } from "mongoose"
import { IJenisPengumpulan } from "./IJenisPengumpulan"

const JenisPengumpulanSchema = new Schema({
  nama: {
    type: String,
  },
  timeline: {
    type: Schema.Types.ObjectId,
    ref: "Timeline"
  },
  status: {
    type: Schema.Types.ObjectId,
    ref: "Status"
  },
})

export const JenisPengumpulan = model<IJenisPengumpulan>(
  "JenisPengumpulan",
  JenisPengumpulanSchema,
  "JenisPengumpulan",
)
