import { Document } from "mongoose";

export interface IPeserta extends Document {
    nama: string
    nim: string
    ktm: string
    foto: string
    tim: string
}