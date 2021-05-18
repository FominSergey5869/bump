import produce, { Draft } from 'immer'

import { UserType } from './types'
import { UserActionsTypes, UserActions } from './actions'
import { LoadingStatus } from '../types'

const initialState: UserType = {
  data: {
    _id: '',
    username: '',
    confirmed: false,
    fullname: '',
    email: '',
    token: '',
  },
  loadingStatus: LoadingStatus.NEVER,
}

const userReducer = produce(
  (draft: Draft<UserType>, action: UserActionsTypes) => {
    switch (action.type) {
      case UserActions.SET_USER:
        draft.data = action.payload
        draft.loadingStatus = LoadingStatus.LOADED
        break
      case UserActions.SIGNUP_USER:
        draft.loadingStatus = LoadingStatus.LOADING
        break
      case UserActions.LOGIN_USER:
        draft.loadingStatus = LoadingStatus.LOADING
        break
      case UserActions.FETCH_USER:
        draft.loadingStatus = LoadingStatus.LOADING
        break
      case UserActions.SET_LOADING_STATUS:
        draft.loadingStatus = action.payload
        break
      default:
        break
    }
  },
  initialState
)

export default userReducer
