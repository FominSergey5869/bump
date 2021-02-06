import produce, { Draft } from 'immer'

import { BumpType, LoadingStatus } from './types'
import { BumpActionsTypes, BumpActions } from './actions'

const initialState: BumpType = {
  data: undefined,
  loadingStatus: LoadingStatus.NEVER
}

const bumpReducer = produce((draft: Draft<BumpType>, action: BumpActionsTypes) => {

  switch (action.type) {
    case BumpActions.SET_BUMP:
      draft.data = action.payload
      draft.loadingStatus = LoadingStatus.LOADED
      break
    case BumpActions.FETCH_BUMP:
      draft.data = undefined
      draft.loadingStatus = LoadingStatus.LOADING
      break;
    case BumpActions.SET_LOADING_STATUS:
      draft.loadingStatus = action.payload
      break
    default:
      break
  }


}, initialState)

export default bumpReducer