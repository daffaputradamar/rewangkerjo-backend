import { Schema, model, Mongoose } from 'mongoose'
import { IPeserta } from '../interfaces'

const PesertaSchema = new Schema({
  nama: {
    type: String
  },
  nim: {
    type: String
  },
  fotoKtm: {
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

export const Peserta = model<IPeserta>('Peserta', PesertaSchema, 'Peserta')
