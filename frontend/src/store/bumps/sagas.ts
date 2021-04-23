import { call, put, takeLatest } from 'redux-saga/effects'
import {
  FetchAddBumpType,
  BumpsActions,
  setBumps,
  setBumpsLoadingStatus,
  addBump,
  setAddBumpLoadingStatus,
} from './actions'
import { BumpsAPI } from '../../services/api/bumpsAPI'
import { LoadingStatus } from '../types'


export function* fetchBumpsRequest(): any {
  try {
    const items = yield call(BumpsAPI.fetchBumps)
    yield put(setBumps(items))
  } catch (error) {
    yield put(setBumpsLoadingStatus(LoadingStatus.ERROR))
  }
}

export function* fetchAddBumpRequest({ payload: text }: FetchAddBumpType): any {
  try {
    const item = yield call(BumpsAPI.addBumpData, text)
    yield put(addBump(item))
  } catch (error) {
    yield put(setAddBumpLoadingStatus(LoadingStatus.ERROR))
  }
}

export function* bumpsSaga() {
  yield takeLatest(BumpsActions.FETCH_BUMPS, fetchBumpsRequest)
  yield takeLatest(BumpsActions.FETCH_ADD_BUMP, fetchAddBumpRequest)
}
