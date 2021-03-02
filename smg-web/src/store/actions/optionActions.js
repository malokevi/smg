import {TOGGLE_MOBILE_NAV, SET_ACTIVE_CARD, TOGGLE_SHOP_NAV} from './actionTypes'

export const toggleMobileNavAction = (isOpen = null) => ({
    type: TOGGLE_MOBILE_NAV,
    isOpen
})

export const toggleShopNavAction = () => ({
    type: TOGGLE_SHOP_NAV
})

export const setActiveCardAction = (key) => ({
    type: SET_ACTIVE_CARD,
    key
})