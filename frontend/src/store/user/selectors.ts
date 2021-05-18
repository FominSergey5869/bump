import { RootStateType } from '..'
import { LoadingStatus } from '../types'
import { UserType } from './types'

export const selectUser = (state: RootStateType): UserType => state.user

export const selectUserData = (state: RootStateType): UserType['data'] =>
  selectUser(state).data

export const selectIsUserLoading = (state: RootStateType): boolean =>
  selectUser(state).loadingStatus === LoadingStatus.LOADING

export const selectIsUserLoaded = (state: RootStateType): boolean =>
  selectUser(state).loadingStatus === LoadingStatus.LOADED

export const selectIsUserError = (state: RootStateType): boolean =>
  selectUser(state).loadingStatus === LoadingStatus.ERROR

export const selectIsAuthentification = (state: RootStateType): boolean =>
  !!selectUser(state).data?.confirmed
