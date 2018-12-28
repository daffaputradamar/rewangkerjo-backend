import { Schema, model } from 'mongoose'
import { ITimeline } from '../interfaces'

const TimelineSchema = new Schema({
  nama: {
    type: String
  },
  tgl_mulai: {
    type: Date
  },
  tgl_selesai: {
    type: Date
  },
  deskripsi: {
    type: String
  }
})

export const Timeline = model<ITimeline>('Timeline', TimelineSchema, 'Timeline')
