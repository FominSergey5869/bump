import { LoadingStatus } from "../types"

export type UserRequest = {
  status: string
  data: UserDataType
}

export type UserDataType = {
  _id: string
  confirmed: boolean
  email: string
  username: string
  fullname: string
  token: string
}


export type UserType = {
 data: UserDataType | undefined
 loadingStatus: LoadingStatus
}