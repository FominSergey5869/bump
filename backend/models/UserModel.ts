import { model, Schema, Document } from 'mongoose'

export interface UserModelType extends Document {
  email: string
  fullname: string
  username: string
  password: string
  confirmed?: boolean
  confirmHash: string
  location?: string
  about?: string
  website?: string
}

const UserSchema = new Schema({
  email: {
    unique: true,
    required: true,
    type: String
  },
  fullname: {
    required: true,
    type: String
  },
  username: {
    unique: true,
    required: true,
    type: String
  },
  password: {
    required: true,
    type: String
  },
  confirmed: {
    type: Boolean,
    default: false
  },
  confirmHash: {
    required: true,
    type: String
  },
  location: String,
  about: String,
  website: String
})

export const UserModel = model<UserModelType>('User', UserSchema)