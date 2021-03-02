import { ADD_MAP_TO_STATE } from '../actions/actionTypes'

const initialState = {}

export const mapReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_MAP_TO_STATE:
            const mapsObj = {map: action.map, maps: action.maps}
            return mapsObj

        default:
            return state
    }
}