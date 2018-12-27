import { Schema, model } from 'mongoose'

const KontakSchema = new Schema({
  nama: {
    type: String
  },
  telp: {
    type: String
  }
})

export const Kontak = model('Kontak', KontakSchema, 'Kontak')
