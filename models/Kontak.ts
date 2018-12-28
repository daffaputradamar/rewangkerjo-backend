import { Schema, model } from 'mongoose'
import { IKontak } from '../interfaces'

const KontakSchema = new Schema({
  nama: {
    type: String
  },
  telp: {
    type: String
  }
})

export const Kontak = model<IKontak>('Kontak', KontakSchema, 'Kontak')
