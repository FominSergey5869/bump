import { AuthAPI } from './../../services/api/authAPI'
import { call, put, takeLatest } from 'redux-saga/effects'
import {
  UserActions,
  setUserData,
  setUserLoadingStatus,
  LoginUserType,
  SignupUserType,
} from './actions'
import { UserAPI } from '../../services/api/userAPI'
import { UserRequest } from './types'
import { LoadingStatus } from '../types'
import { setNotification } from '../notification/actions'

export function* fetchUserRequest() {
  try {
    const { data }: UserRequest = yield call(UserAPI.fetchUserData)
    yield put(setUserData(data))
  } catch (error) {
    yield put(setUserLoadingStatus(LoadingStatus.ERROR))
  }
}

export function* loginUserRequest({ payload }: LoginUserType) {
  try {
    const { data }: UserRequest = yield call(AuthAPI.signIn, payload)
    yield put(setUserData(data))
    window.localStorage.setItem('token', data.token)
  } catch (error) {
    yield put(
      setNotification({
        type: 'warning',
        message: 'Wrong login or password',
      })
    )
    yield put(setUserLoadingStatus(LoadingStatus.ERROR))
  }
}

export function* signupUserRequest({ payload }: SignupUserType) {
  try {
    const { data, status }: UserRequest = yield call(AuthAPI.signUp, payload)
    if (status === 'success') {
      yield put(setUserData(data))
    } else {
      yield put(
        setNotification({
          type: 'warning',
          message: status,
        })
      )
      yield put(setUserLoadingStatus(LoadingStatus.ERROR))
    }
  } catch (error) {
    yield put(
      setNotification({
        type: 'warning',
        message: 'Service error',
      })
    )
    yield put(setUserLoadingStatus(LoadingStatus.ERROR))
  }
}

export function* userSaga() {
  yield takeLatest(UserActions.FETCH_USER, fetchUserRequest)
  yield takeLatest(UserActions.LOGIN_USER, loginUserRequest)
  yield takeLatest(UserActions.SIGNUP_USER, signupUserRequest)
}
