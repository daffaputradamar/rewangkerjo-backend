import { Document } from "mongoose";

export interface ITimeline extends Document {
    nama: string
    tgl_mulai: Date
    tgl_selesai: Date
    deskripsi: string
}