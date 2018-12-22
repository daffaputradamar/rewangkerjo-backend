import { Schema, model } from 'mongoose'

const SupportedBySchema = new Schema({
  nama: {
    type: String
  },
  logo: {
    type: String
  }
})

export const SupportedBy = model('SupportedBy', SupportedBySchema)
