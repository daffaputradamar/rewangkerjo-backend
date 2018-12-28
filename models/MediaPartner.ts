import { model, Schema } from "mongoose"
import { IMediaPartner } from "../interfaces"

const MediaPartnerSchema = new Schema({
  nama: {
    type: String,
  },
  logo: {
    type: String,
  },
})

export const MediaPartner = model<IMediaPartner>(
  "MediaPartner",
  MediaPartnerSchema,
  "MediaPartner",
)
