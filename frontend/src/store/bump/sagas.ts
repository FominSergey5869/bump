import { call, put, takeEvery } from 'redux-saga/effects'
import { BumpActions, FetchBumpType, setBump, setBumpLoadingStatus } from './actions'
import { BumpsAPI } from '../../services/api/bumpsAPI'
import { BumpDataType, LoadingStatus } from './types'


export function* fetchBumpRequest({ payload: bumpId }: FetchBumpType) {
  try {
    const data : BumpDataType = yield call(BumpsAPI.fetchBumpData, bumpId)
    console.log(bumpId)
    yield put(setBump(data))
  } catch (error) {
    yield put(setBumpLoadingStatus(LoadingStatus.ERROR))
  }

}

export function* bumpSaga() {
  yield takeEvery(BumpActions.FETCH_BUMP, fetchBumpRequest)
}