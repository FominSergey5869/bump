import { call, put, takeLatest } from 'redux-saga/effects'
import { FetchAddBumpType, BumpsActions, setBumps, setBumpsLoadingStatus, addBump } from './actions'
import { BumpsAPI } from '../../services/api/bumpsAPI'
import { LoadingStatus } from './types'


export function* fetchBumpsRequest() {
  try {
    const items = yield call(BumpsAPI.fetchBumps)
    yield put(setBumps(items))
  } catch(error) {
    yield put(setBumpsLoadingStatus(LoadingStatus.ERROR))
  }
}

export function* fetchAddBumpRequest({payload}: FetchAddBumpType) {
  try {

    const data = {
      _id: Math.random().toString(36).substr(2),
      text: payload,
      user: {
        fullname: 'Test Tesrt',
        username: 'Test',
        avatarUrl: 'https://source.unsplash.com/random/100x100?1'
      }
    }
    const item = yield call(BumpsAPI.addBumpData, data)
    console.log(item)
    yield put(addBump(item))
  } catch(error) {
    yield put(setBumpsLoadingStatus(LoadingStatus.ERROR))
  }
}

export function* bumpsSaga() {
  yield takeLatest(BumpsActions.FETCH_BUMPS, fetchBumpsRequest)
  yield takeLatest(BumpsActions.FETCH_ADD_BUMP, fetchAddBumpRequest)
}