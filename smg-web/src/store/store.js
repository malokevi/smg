import {createStore, applyMiddleware} from 'redux'
import rootReducer from './reducers/rootReducer'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas/rootSaga'

const saga = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(saga))

saga.run(rootSaga);

export default store