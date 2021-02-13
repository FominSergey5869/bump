import { model, Schema, Document } from 'mongoose'
import { UserModelDocumentType } from './UserModel'

export interface BumpModelType {
  _id?: string
  text: string
  user: string
}

export type BumpModelDocumentType = BumpModelType & Document

const BumpSchema = new Schema({
  text: {
    required: true,
    type: String
  },
  user: {
    required: true,
    ref: 'User',
    type: Schema.Types.ObjectId
  }
})

export const BumpModel = model<BumpModelDocumentType>('Bump', BumpSchema)