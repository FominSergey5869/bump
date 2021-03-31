import { createSelector } from 'reselect'
import { RootStateType } from '..'
import { BumpsType, LoadingStatus } from './types'

export const selectBumps = (state: RootStateType): BumpsType => state.bumps

export const selectBumpsItems = createSelector(
  selectBumps,
  (bumps) => bumps.items
)

export const selectLoadingStatus = createSelector(
  selectBumps,
  (bumps) => bumps.loadingStatus
)

export const selectAddBumpStatus = createSelector(
  selectBumps,
  (bumps) => bumps.addBumpStatus
)

export const selectIsBumpsLoading = (state: RootStateType) =>
  selectLoadingStatus(state) === LoadingStatus.LOADING

export const selectIsBumpsLoaed = (state: RootStateType) =>
  selectLoadingStatus(state) === LoadingStatus.LOADED

export const selectIsBumpStatusLoading = (state: RootStateType) =>
  selectAddBumpStatus(state) === LoadingStatus.LOADING
