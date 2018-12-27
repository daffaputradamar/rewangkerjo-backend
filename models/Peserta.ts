import { Schema, model, Mongoose } from 'mongoose'

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
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
})

export const Peserta = model('Peserta', PesertaSchema, 'Peserta')
