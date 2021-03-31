import { BumpType, LoadingStatus } from './types'

export enum BumpsActions {
  SET_BUMPS = 'bumps/SET_BUMPS',
  FETCH_BUMPS = 'bumps/FETCH_BUMPS',
  FETCH_ADD_BUMP = 'bumps/FETCH_ADD_BUMP',
  ADD_BUMP = 'bumps/ADD_BUMP',
  SET_LOADING_STATUS = 'bumps/SET_LOADING_STATUS',
  SET_ADD_BUMP_LOADING_STATUS = 'bumps/SET_ADD_BUMP_LOADING_STATUS',
}

export type SetBumpsType = {
  type: BumpsActions.SET_BUMPS
  payload: BumpType[]
}

export const setBumps = (payload: BumpType[]): SetBumpsType => ({
  type: BumpsActions.SET_BUMPS,
  payload,
})

export type FetchBumpsType = {
  type: BumpsActions.FETCH_BUMPS
}

export const fetchBumps = (): FetchBumpsType => ({
  type: BumpsActions.FETCH_BUMPS,
})

export type FetchAddBumpType = {
  type: BumpsActions.FETCH_ADD_BUMP
  payload: string
}

export const fetchAddBump = (payload: string): FetchAddBumpType => ({
  type: BumpsActions.FETCH_ADD_BUMP,
  payload,
})

export type AddBumpType = {
  type: BumpsActions.ADD_BUMP
  payload: BumpType
}

export const addBump = (payload: BumpType): AddBumpType => ({
  type: BumpsActions.ADD_BUMP,
  payload,
})

export type SetAddBumpLoadingStatusType = {
  type: BumpsActions.SET_ADD_BUMP_LOADING_STATUS
  payload: LoadingStatus
}

export const setAddBumpLoadingStatus = (
  payload: LoadingStatus
): SetAddBumpLoadingStatusType => ({
  type: BumpsActions.SET_ADD_BUMP_LOADING_STATUS,
  payload: payload,
})

export type SetBumpsLoadingStatusType = {
  type: BumpsActions.SET_LOADING_STATUS
  payload: LoadingStatus
}

export const setBumpsLoadingStatus = (
  payload: LoadingStatus
): SetBumpsLoadingStatusType => ({
  type: BumpsActions.SET_LOADING_STATUS,
  payload: payload,
})

export type BumpsActionsTypes =
  | SetBumpsType
  | SetBumpsLoadingStatusType
  | SetAddBumpLoadingStatusType
  | FetchBumpsType
  | FetchAddBumpType
  | AddBumpType
