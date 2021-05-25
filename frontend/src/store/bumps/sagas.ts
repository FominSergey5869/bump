import { call, put, takeLatest } from 'redux-saga/effects'
import {
  FetchAddBumpType,
  BumpsActions,
  setBumps,
  setBumpsLoadingStatus,
  addBump,
  setAddBumpLoadingStatus,
  removeBump,
  RemoveBumpType,
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

export function* fetchRemoveBumpRequest({ payload }: RemoveBumpType): any {
  try {
    yield call(BumpsAPI.removeBump, payload)
  } catch (error) {
    console.log(error)
    yield put(
      setNotification({
        type: 'warning',
        message: 'Failed to remove bump',
      })
    )
  }
}

export function* bumpsSaga() {
  yield takeLatest(BumpsActions.FETCH_BUMPS, fetchBumpsRequest)
  yield takeLatest(BumpsActions.FETCH_ADD_BUMP, fetchAddBumpRequest)
  yield takeLatest(BumpsActions.REMOVE_BUMP, fetchRemoveBumpRequest)
}
