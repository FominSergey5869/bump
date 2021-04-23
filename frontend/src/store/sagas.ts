import { all } from 'redux-saga/effects'
import { userSaga } from './user/sagas'
import { bumpSaga } from './bump/sagas'
import { bumpsSaga } from './bumps/sagas'
import { topicsSaga } from './topics/sagas'


export default function* rootSaga() {
  yield all([
    userSaga(),
    bumpSaga(),
    bumpsSaga(),
    topicsSaga()
  ])
}