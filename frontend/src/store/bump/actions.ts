import { LoadingStatus } from "../types";
import { BumpDataType } from "./types";

export enum BumpActions {
  SET_BUMP = 'bumps/SET_BUMP',
  FETCH_BUMP = 'bumps/FETCH_BUMP',
  SET_LOADING_STATUS = 'bumps/SET_LOADING_STATUS'
}


export type SetBumpType = {
  type: BumpActions.SET_BUMP,
  payload: BumpDataType
}

export const setBump = (payload: BumpDataType): SetBumpType => ({
  type: BumpActions.SET_BUMP,
  payload
})


export type FetchBumpType = {
  type: BumpActions.FETCH_BUMP,
  payload: string
}

export const fetchBump = (payload: string): FetchBumpType => ({
  type: BumpActions.FETCH_BUMP,
  payload
})



export type SetBumpLoadingStatusType = {
  type: BumpActions.SET_LOADING_STATUS,
  payload: LoadingStatus
}

export const setBumpLoadingStatus = (payload: LoadingStatus): SetBumpLoadingStatusType => ({
  type: BumpActions.SET_LOADING_STATUS,
  payload: payload
})





export type BumpActionsTypes = SetBumpType | SetBumpLoadingStatusType | FetchBumpType