import {all} from 'redux-saga/effects'
import {shopSaga} from './shopSaga'
import {authSaga} from './authSaga'
import {contentfulSaga} from './contentfulSaga'

function* rootSaga() {
    yield all([
        shopSaga(),
        authSaga(),
        contentfulSaga()
    ])
}

export default rootSaga