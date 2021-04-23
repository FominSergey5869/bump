import { AuthData } from '../../services/api/authAPI'
import { LoadingStatus } from '../types'
import { UserDataType } from './types'

export enum UserActions {
  SET_USER = 'user/SET_USER',
  FETCH_USER = 'user/FETCH_USER',
  LOGIN_USER = 'user/LOGIN_USER',
  SET_LOADING_STATUS = 'user/SET_LOADING_STATUS',
}

export type setUserDataType = {
  type: UserActions.SET_USER
  payload: UserDataType
}

export const setUserData = (payload: UserDataType): setUserDataType => ({
  type: UserActions.SET_USER,
  payload,
})

export type FetchUserType = {
  type: UserActions.FETCH_USER
}

export const fetchUser = (): FetchUserType => ({
  type: UserActions.FETCH_USER
})

export type LoginUserType = {
  type: UserActions.LOGIN_USER
  payload: AuthData
}

export const loginUser = (payload: AuthData): LoginUserType => ({
  type: UserActions.LOGIN_USER,
  payload,
})

export type SetUserLoadingStatusType = {
  type: UserActions.SET_LOADING_STATUS
  payload: LoadingStatus
}

export const setUserLoadingStatus = (
  payload: LoadingStatus
): SetUserLoadingStatusType => ({
  type: UserActions.SET_LOADING_STATUS,
  payload: payload,
})

export type UserActionsTypes =
  | setUserDataType
  | SetUserLoadingStatusType
  | FetchUserType
  | LoginUserType
