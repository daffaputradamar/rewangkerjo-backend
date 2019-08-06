import { model, Schema } from "mongoose"
import { IPeserta } from "./IPeserta"

const PesertaSchema = new Schema({
  nama: {
    type: String,
  },
  nim: {
    type: String,
  },
  ktm: {
    type: String,
  },
  foto: {
    type: String,
  },
  tim: {
    type: Schema.Types.ObjectId,
    ref: "Tim",
  },
})

export const Peserta = model<IPeserta>("Peserta", PesertaSchema, "Peserta")
