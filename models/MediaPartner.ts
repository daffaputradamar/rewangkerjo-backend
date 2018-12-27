import { Schema, model } from 'mongoose'

const MediaPartnerSchema = new Schema({
  nama: {
    type: String
  },
  logo: {
    type: String
  }
})

export const MediaPartner = model(
  'MediaPartner',
  MediaPartnerSchema,
  'MediaPartner'
)
