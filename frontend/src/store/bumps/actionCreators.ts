import { BumpType, LoadingStatus } from "./types";

export enum BumpsActionsType {
  SET_BUMPS = 'bumps/SET_BUMPS',
  FETCH_BUMPS = 'bumps/FETCH_BUMPS',
  SET_LOADING_STATUS = 'bumps/SET_LOADING_STATUS'
}


export type SetBumpsType = {
  type: BumpsActionsType.SET_BUMPS,
  payload: BumpType[]
}

export const setBumps = (payload: BumpType[]): SetBumpsType => ({
  type: BumpsActionsType.SET_BUMPS,
  payload
})


export type FetchBumpsType = {
  type: BumpsActionsType.FETCH_BUMPS
}

export const fetchBumps = (): FetchBumpsType => ({
  type: BumpsActionsType.FETCH_BUMPS
})



export type SetBumpsLoadingStatusType = {
  type: BumpsActionsType.SET_LOADING_STATUS,
  payload: LoadingStatus
}

export const setBumpsLoadingStatus = (payload: LoadingStatus): SetBumpsLoadingStatusType => ({
  type: BumpsActionsType.SET_LOADING_STATUS,
  payload: payload
})





export type BumpsActions = SetBumpsType | SetBumpsLoadingStatusType | FetchBumpsType