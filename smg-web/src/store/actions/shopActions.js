import {
    GET_PRODUCTS,
    GOT_PRODUCTS,
    GET_PRODUCT,
    GOT_PRODUCT,
    TOGGLE_CART_ITEM,
    CART_ITEM_TOGGLED, 
    SET_CART, 
    POPULATE_CART,
    CART_POPULATED,
    GET_COLLECTIONS,
    GOT_COLLECTIONS,
    GET_COLLECTION,
    GOT_COLLECTION,
    CHECKOUT_CREATE,
    CHECKOUT_CREATED
} from './actionTypes'

//get products
export const getProductsAction = () => ({
    type: GET_PRODUCTS
})

export const gotProductsAction = (products) => ({
    type: GOT_PRODUCTS,
    products
})

//get single product
export const getProductAction = (id) => {
    return {
        type: GET_PRODUCT,
        id
    }
}

export const gotProductAction = (product) => ({
    type: GOT_PRODUCT,
    product
})

//toggle cart item
export const toggleCartItemAction = (id) => {
    return {
        type: TOGGLE_CART_ITEM,
        id
    }
}

export const cartItemToggledAction = (cart) => {
    return {
        type: CART_ITEM_TOGGLED,
        cart
    }
}

//set cart
export const setCartAction = (cart) => {
    return {
        type: SET_CART,
        cart
    }
}

//Populate Cart
export const getPopulateCartAction = (ids) => ({
    type: POPULATE_CART,
    ids
})

export const cartPopulatedAction = (cartData) => ({
    type: CART_POPULATED,
    cartData
})


//get collections
export const getCollectionsAction = () => {
    return {
        type: GET_COLLECTIONS
    }
}

export const gotCollectionsAction = (collections) => ({
    type: GOT_COLLECTIONS,
    collections
})


//get collection by ID
export const getCollectionAction = (id) => {
    return {
        type: GET_COLLECTION,
        id
    }
}

export const gotCollectionAction = (collection) => ({
    type: GOT_COLLECTION,
    collection
})

//Create Checkout Instance
export const postCreateCheckoutAction = (checkout) => {
    return {
        type: CHECKOUT_CREATE,
        checkout
    }
}

export const postCreatedCheckoutAction = (token) => ({
    type: CHECKOUT_CREATED,
    token
})

