import { Schema, model } from 'mongoose'

const SampleSchema = new Schema({
  sampleField: {
    type: String
  }
})

export const Sample = model('Sample', SampleSchema, 'Sample')
