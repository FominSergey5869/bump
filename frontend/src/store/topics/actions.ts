import { LoadingStatus } from "../types";
import { TopicType } from "./types";

export enum TopicsActions {
  SET_TOPICS = 'topics/SET_TOPICS',
  FETCH_TOPICS = 'topics/FETCH_TOPICS',
  SET_LOADING_STATUS = 'topics/SET_LOADING_STATUS'
}


export type SetTopicsType = {
  type: TopicsActions.SET_TOPICS,
  payload: TopicType[]
}

export const setTopics = (payload: TopicType[]): SetTopicsType => ({
  type: TopicsActions.SET_TOPICS,
  payload
})


export type FetchTopicsType = {
  type: TopicsActions.FETCH_TOPICS
}

export const fetchTopics = (): FetchTopicsType => ({
  type: TopicsActions.FETCH_TOPICS
})



export type SetTopicsLoadingStatusType = {
  type: TopicsActions.SET_LOADING_STATUS,
  payload: LoadingStatus
}

export const setTopicsLoadingStatus = (payload: LoadingStatus): SetTopicsLoadingStatusType => ({
  type: TopicsActions.SET_LOADING_STATUS,
  payload: payload
})





export type TopicsActionsTypes = SetTopicsType | SetTopicsLoadingStatusType | FetchTopicsType