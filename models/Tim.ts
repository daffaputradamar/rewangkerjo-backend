import { model, Schema } from "mongoose"
import { ITim } from "../interfaces"

const TimSchema = new Schema({
  nama: {
    type: String,
  },
  universitas: {
    type: Schema.Types.ObjectId,
    ref: "Universitas",
  },
  statusTim: {
    tahapPertama: {
      type: Boolean,
    },
    tahapKedua: {
      type: Boolean,
    },
  },
  ketua: {
    type: Schema.Types.ObjectId,
    ref: "Peserta",
  },
  peserta: [
    {
      type: Schema.Types.ObjectId,
      ref: "Peserta",
    },
  ],
  namaAplikasi: {
    type: String,
  },
  fileProposal: {
    type: String,
  },
  filePresentasiVideo: {
    type: String,
  },
  fileDemo: {
    type: String,
  },
  fileAplikasi: {
    type: String,
  },
})

export const Tim = model<ITim>("Tim", TimSchema, "Tim")
