export enum LoadingStatus {
  LOADING = 'LOADING',
  LOADED = 'LOADED',
  NEVER = 'NEVER',
  ERROR = 'ERROR'
}

export type BumpType = {
  _id: string,
  text: string,
  user: {
    fullname: string,
    username: string,
    avatarUrl: string
  }
}

export type BumpsType = {
  items: BumpType[],
  loadingStatus: LoadingStatus
}