import { Schema, model } from 'mongoose'

const HadiahSchema = new Schema({
  judul: {
    type: String
  },
  nominal: {
    type: Number
  }
})

export const Hadiah = model('Hadiah', HadiahSchema, 'Hadiah')
