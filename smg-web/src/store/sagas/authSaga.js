import {take, takeEvery, put, all, call, fork} from 'redux-saga/effects'

import * as types from '../actions/actionTypes'
import * as authServices from '../../services/authServices'
import * as authActions from '../actions/authActions'

// Login
function* postLogin(props) { //worker saga
    const token = yield call(authServices.handleLogin, props)
    yield put(authActions.setCurrentUser(token))
}

function* watchPostLogin() { //watcher saga
    yield takeEvery(types.POST_LOGIN, postLogin)
}

// Register
function* postRegister(props) {
    const result = yield call(authServices.handleRegister, props)
    yield put(authActions.userRegisteredAction(result))
}

function* watchPostRegister() {
    yield takeEvery(types.POST_REGISTER, postRegister)
}

// Logout 
function* userLogout() {
    const result = yield call(authServices.handleLogout)
    yield put(authActions.setCurrentUser({}))
}

function* watchUserLogout() {
    yield takeEvery(types.USER_LOGOUT, userLogout)
}

export function* authSaga() {
    yield all([
        watchPostLogin(),
        watchPostRegister(),
        watchUserLogout()
    ])
}