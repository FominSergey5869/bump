import { createSelector } from "reselect";
import { RootStateType } from "..";
import { BumpsType, LoadingStatus } from "./types";

export const selectBumps = (state: RootStateType) : BumpsType => state.bumps

export const selectBumpsItems = createSelector(selectBumps, bumps => bumps.items)

export const selectIsBumpsLoading =  (state: RootStateType) => selectLoadingStatus(state) === LoadingStatus.LOADING

export const selectIsBumpsLoaed =  (state: RootStateType) => selectLoadingStatus(state) === LoadingStatus.LOADED

export const selectLoadingStatus = createSelector(selectBumps, (bumps) => bumps.loadingStatus)
