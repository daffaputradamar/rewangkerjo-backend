import { Document } from "mongoose";

export interface IPengumpulan extends Document {
    jenisPengumpulan: string
    file: string
    tim: string
}