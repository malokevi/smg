import {take, takeEvery, put, all, call, fork} from 'redux-saga/effects'

import * as types from '../actions/actionTypes'
import * as contentfulServices from '../../services/contentfulServices'
import * as contentfulActions from '../actions/contentfulActions'

// Login
function* getEntries({entryId}) {
    const data = yield call(contentfulServices.getEntries, entryId)
    yield put(contentfulActions.gotEntriesAction(data))
}

function* watchGetEntries() {
    yield takeEvery(types.GET_ENTRIES, getEntries)
}

export function* contentfulSaga() {
    yield all([
        watchGetEntries()
    ])
}