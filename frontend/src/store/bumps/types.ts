import { LoadingStatus } from "../types"

export type BumpType = {
  _id: string,
  text: string,
  user: {
    fullname: string,
    username: string,
    avatarUrl: string
  }
  createdAt: string
  updatedAt: string
}

export type BumpsType = {
  items: BumpType[],
  loadingStatus: LoadingStatus,
  addBumpStatus: LoadingStatus
}