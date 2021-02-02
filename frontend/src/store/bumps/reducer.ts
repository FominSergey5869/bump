import produce, { Draft } from 'immer'

import { BumpsType, LoadingStatus } from './types'
import { BumpsActionsType, BumpsActions } from './actionCreators'

const initialState: BumpsType = {
  items: [],
  loadingStatus: LoadingStatus.NEVER
}

const bumpsReducer = produce((draft: Draft<BumpsType>, action: BumpsActions) => {

  switch (action.type) {
    case BumpsActionsType.SET_BUMPS:
      draft.items = action.payload
      draft.loadingStatus = LoadingStatus.LOADED
      break
    case BumpsActionsType.FETCH_BUMPS:
      draft.items = []
      draft.loadingStatus = LoadingStatus.LOADING
      break;
    case BumpsActionsType.SET_LOADING_STATUS:
      draft.loadingStatus = action.payload
      break
    default:
      break
  }


}, initialState)

export default bumpsReducer