import { Schema, model } from 'mongoose'
import { IUser } from '../interfaces'

const UserSchema = new Schema({
  username: {
    type: String
  },
  email: {
    type: String
  },
  password: {
    type: String
  },
  isAdmin: {
    type: Boolean
  }
})

export const User = model<IUser>('User', UserSchema, 'User')
