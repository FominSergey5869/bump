import { call, put, takeEvery } from 'redux-saga/effects'
import { TopicsActions, setTopics, setTopicsLoadingStatus } from './actions'
import { TopicsAPI } from '../../services/api/topicsAPI'
import { LoadingStatus } from './types'


export function* fetchTopicsRequest() {
  try {
    const items = yield call(TopicsAPI.fetchTopics)
    yield put(setTopics(items))
  } catch(error) {
    yield put(setTopicsLoadingStatus(LoadingStatus.ERROR))
  }

}

export function* topicsSaga() {
  yield takeEvery(TopicsActions.FETCH_TOPICS, fetchTopicsRequest)
}