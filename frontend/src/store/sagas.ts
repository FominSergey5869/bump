import { all } from 'redux-saga/effects'
import { bumpsSaga } from './bumps/saga'

export default function* rootSaga() {
  yield all([
    bumpsSaga()
  ])
}