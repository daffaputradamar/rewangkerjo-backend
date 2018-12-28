import { Schema, model } from 'mongoose'
import { ISupportedBy } from '../interfaces'

const SupportedBySchema = new Schema({
  nama: {
    type: String
  },
  logo: {
    type: String
  }
})

export const SupportedBy = model<ISupportedBy>(
  'SupportedBy',
  SupportedBySchema,
  'SupportedBy'
)
