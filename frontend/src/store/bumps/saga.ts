import { call, put, takeEvery } from 'redux-saga/effects'
import { BumpsActionsType, setBumps, setBumpsLoadingStatus } from './actionCreators'
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

export function* bumpsSaga() {
  yield takeEvery(BumpsActionsType.FETCH_BUMPS, fetchBumpsRequest)
}