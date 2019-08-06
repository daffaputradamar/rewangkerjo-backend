import { Document } from "mongoose"

export interface ITim extends Document {
    nama: string
    namaAplikasi: string
    universitas: string
    ketua: string
    email: string
    telp: string
    status: string
    username: string
    password: string
}