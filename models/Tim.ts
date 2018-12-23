import { Schema, model } from 'mongoose'

const TimSchema = new Schema({
  nama: {
    type: String
  },
  universitas: {
      type: String
  },
  statusTim_id: {
      type: String
  },
  peserta_id: [{
      type: String
  }],
  fileProposal: {
      type: String
  },
  filePresentasiVideo: {
      type: String
  },
  fileDemo: {
      type: String
  },
  fileAplikasi: {
      type: String
  }
})

export const Tim = model('Tim', TimSchema)
