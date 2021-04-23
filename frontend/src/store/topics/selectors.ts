import { createSelector } from "reselect";
import { RootStateType } from "..";
import { LoadingStatus } from "../types";
import { TopicsType } from "./types";

export const selectTopics = (state: RootStateType) : TopicsType => state.topics

export const selectTopicsItems = createSelector(selectTopics, topics => topics.items)

export const selectLoadingStatus = createSelector(selectTopics, (topics) => topics.loadingStatus)

export const selectIsTopicsLoading =  (state: RootStateType) => selectLoadingStatus(state) === LoadingStatus.LOADING

export const selectIsTopicsLoaed =  (state: RootStateType) => selectLoadingStatus(state) === LoadingStatus.LOADED


