import { model, Schema } from "mongoose"
import { ISupportedBy } from "./ISupportedBy"

const SupportedBySchema = new Schema({
  nama: {
    type: String,
  },
  logo: {
    type: String,
  },
})

export const SupportedBy = model<ISupportedBy>(
  "SupportedBy",
  SupportedBySchema,
  "SupportedBy",
)