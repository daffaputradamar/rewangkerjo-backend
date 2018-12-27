import { Schema, model } from 'mongoose'

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
  level: {
    type: String
  }
})

export const User = model('User', UserSchema, 'User')
