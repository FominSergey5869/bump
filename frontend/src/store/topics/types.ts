import { LoadingStatus } from "../types"

export type TopicType = {
  _id: string,
  name: string,
  count: number
}

export type TopicsType = {
  items: TopicType[],
  loadingStatus: LoadingStatus
}