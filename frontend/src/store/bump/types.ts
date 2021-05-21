import { LoadingStatus } from '../types'
import { UserDataType } from '../user/types'

export type BumpDataType = {
  _id: string
  text: string
  images: string[],
  user: UserDataType,
  createdAt: string
  updatedAt: string
}

export type BumpType = {
  data?: BumpDataType
  loadingStatus: LoadingStatus
}
