import { model, Schema, Mongoose } from "mongoose"
import { ITim } from "./ITim"

const TimSchema = new Schema({
    nama: {
        type: String,
        unique: true
    },
    namaAplikasi: {
        type: String,
        unique: true
    },
    universitas: {
        type: Schema.Types.ObjectId,
        ref: "Universitas"
    },
    ketua: {
        type: Schema.Types.ObjectId,
        ref: "Peserta"
    },
    email: {
        type: String,
        unique: true
    },
    telp: {
        type: String
    },
    status: {
        type: Schema.Types.ObjectId,
        ref: "Status"
    },
    username: {
        type: String,
        unique: true
    },
    password: {
        type: String
    },
})

export const Tim = model<ITim>(
  "Tim",
  TimSchema,
  "Tim",
)
