import { GOT_ENTRIES } from '../actions/actionTypes'

const initialState = {}

export const contentfulReducer = (state = initialState, action) => {
    switch(action.type) {
        case GOT_ENTRIES:
            return action.data.items[0].fields

        default:
            return state
    }
}