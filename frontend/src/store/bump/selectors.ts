import { createSelector } from "reselect";
import { RootStateType } from "..";
import { BumpType, LoadingStatus } from "./types";

export const selectBump = (state: RootStateType) : BumpType => state.bump

export const selectBumpData = createSelector(selectBump, bump => bump.data)

export const selectLoadingStatus = createSelector(selectBump, (bump) => bump.loadingStatus)

export const selectIsBumpLoading =  (state: RootStateType) => selectLoadingStatus(state) === LoadingStatus.LOADING

export const selectIsBumpLoaed =  (state: RootStateType) => selectLoadingStatus(state) === LoadingStatus.LOADED

