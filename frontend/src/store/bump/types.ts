export enum LoadingStatus {
  LOADING = 'LOADING',
  LOADED = 'LOADED',
  NEVER = 'NEVER',
  ERROR = 'ERROR'
}

export type BumpDataType = {
  _id: string,
  text: string,
  user: {
    fullname: string,
    username: string,
    avatarUrl: string
  }
}

export type BumpType = {
  data?: BumpDataType,
  loadingStatus: LoadingStatus
}