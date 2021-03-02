import {GET_ENTRIES, GOT_ENTRIES} from './actionTypes'

export const getEntriesAction = (entryId) => {
    return {
        type: GET_ENTRIES,
        entryId
    }
}

export const gotEntriesAction = (data) => {
    return {
        type: GOT_ENTRIES,
        data
    }
}
