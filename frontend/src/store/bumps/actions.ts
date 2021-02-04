import { BumpType, LoadingStatus } from "./types";

export enum BumpsActions {
  SET_BUMPS = 'bumps/SET_BUMPS',
  FETCH_BUMPS = 'bumps/FETCH_BUMPS',
  SET_LOADING_STATUS = 'bumps/SET_LOADING_STATUS'
}


export type SetBumpsType = {
  type: BumpsActions.SET_BUMPS,
  payload: BumpType[]
}

export const setBumps = (payload: BumpType[]): SetBumpsType => ({
  type: BumpsActions.SET_BUMPS,
  payload
})


export type FetchBumpsType = {
  type: BumpsActions.FETCH_BUMPS
}

export const fetchBumps = (): FetchBumpsType => ({
  type: BumpsActions.FETCH_BUMPS
})



export type SetBumpsLoadingStatusType = {
  type: BumpsActions.SET_LOADING_STATUS,
  payload: LoadingStatus
}

export const setBumpsLoadingStatus = (payload: LoadingStatus): SetBumpsLoadingStatusType => ({
  type: BumpsActions.SET_LOADING_STATUS,
  payload: payload
})





export type BumpsActionsTypes = SetBumpsType | SetBumpsLoadingStatusType | FetchBumpsType