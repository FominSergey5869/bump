import produce, { Draft } from 'immer'

import { TopicsType, LoadingStatus } from './types'
import { TopicsActionsTypes, TopicsActions } from './actions'

const initialState: TopicsType = {
  items: [],
  loadingStatus: LoadingStatus.NEVER
}

const topicsReducer = produce((draft: Draft<TopicsType>, action: TopicsActionsTypes) => {

  switch (action.type) {
    case TopicsActions.SET_TOPICS:
      draft.items = action.payload
      draft.loadingStatus = LoadingStatus.LOADED
      break
    case TopicsActions.FETCH_TOPICS:
      draft.items = []
      draft.loadingStatus = LoadingStatus.LOADING
      break;
    case TopicsActions.SET_LOADING_STATUS:
      draft.loadingStatus = action.payload
      break
    default:
      break
  }


}, initialState)

export default topicsReducer