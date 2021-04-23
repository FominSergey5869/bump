import { RootStateType } from '..'
import { LoadingStatus } from '../types'
import { UserType } from './types'

export const selectUser = (state: RootStateType): UserType => state.user

export const selectUserData = (state: RootStateType): UserType['data'] =>
  selectUser(state).data

export const selectIsUserLoading = (state: RootStateType): boolean =>
  selectUser(state).loadingStatus === LoadingStatus.LOADING

export const selectIsAuthentification = (state: RootStateType): boolean =>
  selectUser(state).loadingStatus === LoadingStatus.LOADED
