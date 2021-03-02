import { TOGGLE_MOBILE_NAV, SET_ACTIVE_CARD, TOGGLE_SHOP_NAV } from '../actions/actionTypes'

const initialState = {
    toggleMobileNav:false,
    activeCard:false,
    toggleShopNav:false
}

export const optionReducer = (state = initialState, action) => {
    switch(action.type) {
        case TOGGLE_MOBILE_NAV:
            const isOpen = action.isOpen !== null ? action.isOpen : !state.toggleMobileNav 

            return {...state,
                toggleMobileNav: isOpen
            }

        case TOGGLE_SHOP_NAV:
            return {...state,
                toggleShopNav: !state.toggleShopNav
            }
    
        case SET_ACTIVE_CARD:
            const activeCard = action.key

            return {
                ...state,
                activeCard: activeCard
            }

        default:
            return state
    }
}