import {ADD_MAP_TO_STATE} from './actionTypes'

export const addMapToStateAction = (map, maps) => ({
    type: ADD_MAP_TO_STATE,
    map,
    maps
})
