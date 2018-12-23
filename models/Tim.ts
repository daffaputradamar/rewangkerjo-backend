import { Schema, model } from 'mongoose'
import { ObjectId } from 'bson';

const TimSchema = new Schema({
  nama: {
    type: String
  },
  universitas_id: {
      type: ObjectId
  },
  statusTim: {
      tahapPertama: {
          type: Boolean
      },
      tahapKedua: {
          type: Boolean
      }
  },
  ketua: {
      _id: {
          type: ObjectId
      },
      noTelp: {
          type: String
      }
  },
  peserta_id: [{
      type: ObjectId
  }],
  namaAplikasi: {
      type: String
  },
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
