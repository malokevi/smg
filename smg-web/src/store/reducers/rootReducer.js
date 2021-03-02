import { combineReducers } from 'redux'
import { mapReducer } from './mapReducer'
import {optionReducer} from './optionReducer'
import {shopReducer} from './shopReducer'
import {authReducer} from './authReducers'
import {errorReducer} from './errorReducers'
import { contentfulReducer } from './contentfulReducer'

const rootReducer = combineReducers({
    map: mapReducer,
    options: optionReducer,
    shop: shopReducer,
    auth: authReducer,
    error: errorReducer,
    contentful: contentfulReducer
})

export default rootReducer