import { model, Schema } from "mongoose"
import { ITimeline } from "./ITimeline"

const TimelineSchema = new Schema({
  nama: {
    type: String,
  },
  tgl_mulai: {
    type: Date,
  },
  tgl_selesai: {
    type: Date,
  },
  deskripsi: {
    type: String,
  },
})

export const Timeline = model<ITimeline>(
  "Timeline",
  TimelineSchema,
  "Timeline",
)
