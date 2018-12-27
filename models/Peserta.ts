import { Schema, model } from 'mongoose'

const PesertaSchema = new Schema({
  nama: {
    type: String
  },
  nim: {
    type: String
  },
  fotoKtp: {
    type: String
  },
  foto: {
    type: String
  },
  user_id: {
    type: String
  }
})

export const Peserta = model('Peserta', PesertaSchema, 'Peserta')
