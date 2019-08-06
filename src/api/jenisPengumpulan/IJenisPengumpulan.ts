import { Document } from "mongoose";

export interface IJenisPengumpulan extends Document {
    nama: string
    timeline: string
    status: string
}