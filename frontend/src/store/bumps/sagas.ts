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
import { setNotification } from '../notification/actions'

export function* fetchBumpsRequest(): any {
  try {
    const items = yield call(BumpsAPI.fetchBumps)
    yield put(setBumps(items))
  } catch (error) {
    yield put(setBumpsLoadingStatus(LoadingStatus.ERROR))
  }
}

export function* fetchAddBumpRequest({ payload }: FetchAddBumpType): any {
  try {
    const item = yield call(BumpsAPI.addBumpData, payload)
    
    console.log(item)
    if (item.status === 'error')
      yield put(
        setNotification({
          type: 'warning',
          message: 'Failed to load bump',
        })
      )
    yield put(addBump(item))
  } catch (error) {
    yield put(setAddBumpLoadingStatus(LoadingStatus.ERROR))
  }
}

export function* bumpsSaga() {
  yield takeLatest(BumpsActions.FETCH_BUMPS, fetchBumpsRequest)
  yield takeLatest(BumpsActions.FETCH_ADD_BUMP, fetchAddBumpRequest)
}
