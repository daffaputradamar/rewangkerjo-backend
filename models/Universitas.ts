import { Schema, model } from 'mongoose'


const UniversitasSchema = new Schema({
    nama: {
        type: String
     }
  })
  
  export const Universitas = model('Universitas', UniversitasSchema)
