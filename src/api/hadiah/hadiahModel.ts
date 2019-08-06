import { model, Schema } from "mongoose"
import { IHadiah } from "./IHadiah"

const HadiahSchema = new Schema({
  judul: {
    type: String,
  },
  nominal: {
    type: Number,
  },
})

export const Hadiah = model<IHadiah>(
    "Hadiah", 
    HadiahSchema, 
    "Hadiah"
)