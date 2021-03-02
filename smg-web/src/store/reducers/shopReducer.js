import { 
    GOT_COLLECTIONS, 
    GOT_PRODUCTS, 
    GOT_PRODUCT, 
    CART_ITEM_TOGGLED, 
    SET_CART, 
    CART_POPULATED, 
    GOT_COLLECTION,
    CHECKOUT_CREATED 
} from '../actions/actionTypes'

const initialState = {
    products: [],
    product: [],
    cart: [],
    cartData: [],
    collections: [],
    collection: [],
    checkoutToken: ''
}

export const shopReducer = (state = initialState, action) => {
    switch(action.type) {
        case GOT_PRODUCTS:
            const products = action.products
            return {...state, products: products}

        case GOT_PRODUCT:
            const product = action.product
            return {...state, product: product}

        case CART_ITEM_TOGGLED:
            const cart = action.cart
            return {...state, cart: cart}

        case SET_CART :
            const setCart = action.cart === null ? [] : action.cart
            return {
                ...state,
                cart: setCart
            }

        case CART_POPULATED :
            return {
                ...state,
                cartData : action.cartData
            }

        case GOT_COLLECTIONS :
            return {
                ...state,
                collections : action.collections
            }

        case GOT_COLLECTION :
            return {
                ...state,
                collection : action.collection
            }

        case CHECKOUT_CREATED :
            return {
                ...state,
                checkoutToken : action.token
            }
    
        default:
            return state
    }
}