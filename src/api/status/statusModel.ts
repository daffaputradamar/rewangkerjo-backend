import { model, Schema } from "mongoose"
import { IStatus } from "./IStatus"

const StatusSchema = new Schema({
  nama: {
    type: String,
  }
})

export const Status = model<IStatus>(
  "Status",
  StatusSchema,
  "Status",
)
