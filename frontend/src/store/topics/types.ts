export enum LoadingStatus {
  LOADING = 'LOADING',
  LOADED = 'LOADED',
  NEVER = 'NEVER',
  ERROR = 'ERROR'
}

export type TopicType = {
  _id: string,
  name: string,
  count: number
}

export type TopicsType = {
  items: TopicType[],
  loadingStatus: LoadingStatus
}