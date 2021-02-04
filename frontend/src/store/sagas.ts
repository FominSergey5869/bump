import { all } from 'redux-saga/effects'
import { bumpsSaga } from './bumps/sagas'
import { topicsSaga } from './topics/sagas'

export default function* rootSaga() {
  yield all([
    bumpsSaga(),
    topicsSaga()
  ])
}