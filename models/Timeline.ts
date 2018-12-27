import { Schema, model } from 'mongoose'

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

export const Timeline = model('Timeline', TimelineSchema, 'Timeline')
