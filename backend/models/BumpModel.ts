import { model, Schema, Document } from 'mongoose'

export interface BumpModelType {
  _id?: string
  text: string
  user: string
  images?: string[]
}

export type BumpModelDocumentType = BumpModelType & Document

const BumpSchema = new Schema(
  {
    text: {
      required: true,
      type: String
    },
    user: {
      required: true,
      ref: 'User',
      type: Schema.Types.ObjectId
    },
    images: [{
      type: String
    }]
  },
  {
    timestamps: true
  }
)

export const BumpModel = model<BumpModelDocumentType>('Bump', BumpSchema)
