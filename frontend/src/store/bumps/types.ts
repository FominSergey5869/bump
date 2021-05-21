import { LoadingStatus } from "../types"
import { UserDataType } from "../user/types"

export type BumpType = {
  _id: string,
  text: string,
  images: string[],
  user: UserDataType,
  createdAt: string
  updatedAt: string
}

export type BumpsType = {
  items: BumpType[],
  loadingStatus: LoadingStatus,
  addBumpStatus: LoadingStatus
}