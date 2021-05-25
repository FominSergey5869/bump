import produce, { Draft } from 'immer'

import { BumpsType } from './types'
import { BumpsActionsTypes, BumpsActions } from './actions'
import { LoadingStatus } from '../types'

const initialState: BumpsType = {
  items: [],
  loadingStatus: LoadingStatus.NEVER,
  addBumpStatus: LoadingStatus.NEVER,
}

const bumpsReducer = produce(
  (draft: Draft<BumpsType>, action: BumpsActionsTypes) => {
    switch (action.type) {
      case BumpsActions.SET_BUMPS:
        draft.items = action.payload
        draft.loadingStatus = LoadingStatus.LOADED
        break
      case BumpsActions.FETCH_BUMPS:
        draft.items = []
        draft.loadingStatus = LoadingStatus.LOADING
        break
      case BumpsActions.FETCH_ADD_BUMP:
        draft.addBumpStatus = LoadingStatus.LOADING
        break
      case BumpsActions.ADD_BUMP:
        draft.items.unshift(action.payload)
        draft.addBumpStatus = LoadingStatus.LOADED
        break
        case BumpsActions.REMOVE_BUMP:
        draft.items = draft.items.filter(item => item._id !== action.payload  )
        break
      case BumpsActions.SET_LOADING_STATUS:
        draft.loadingStatus = action.payload
        break
      case BumpsActions.SET_ADD_BUMP_LOADING_STATUS:
        draft.addBumpStatus = action.payload
        break
      default:
        break
    }
  },
  initialState
)

export default bumpsReducer
