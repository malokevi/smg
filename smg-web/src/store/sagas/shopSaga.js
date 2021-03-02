import {take, takeEvery, put, all, call, fork} from 'redux-saga/effects'

import * as types from '../actions/actionTypes'
import * as productServices from '../../services/productServices'
import * as checkoutServices from '../../services/checkoutServices'
import * as shopActions from '../actions/shopActions'

// Get Products
function* getProducts() { //worker saga
    const products = yield call(productServices.getProducts)
    yield put(shopActions.gotProductsAction(products))
}

function* watchGetProducts() { //watcher saga
    yield takeEvery(types.GET_PRODUCTS, getProducts)
}

// Get Product
function* getProduct({id}) {
    const product = yield call(productServices.getProduct, id)
    yield put(shopActions.gotProductAction(product))
}

function* watchGetProduct() {
    yield takeEvery(types.GET_PRODUCT, getProduct)
}

// toggle cart item
function* toggleCartItem({id}) {
    const cart = yield call(productServices.toggleCartItem, id)
    yield put(shopActions.cartItemToggledAction(cart))
}

function* watchtoggleCartItem() {
    yield takeEvery(types.TOGGLE_CART_ITEM, toggleCartItem)
}

// Get Products
function* populateCart({ids}) { //worker saga
    const cartData = yield call(productServices.populateCart, ids)
    yield put(shopActions.cartPopulatedAction(cartData))
}

function* watchPopulateCart() { //watcher saga
    yield takeEvery(types.POPULATE_CART, populateCart)
}

// Get Collections
function* getCollections() { //worker saga
    const collectionsData = yield call(productServices.getCollections)
    yield put(shopActions.gotCollectionsAction(collectionsData))
}

function* watchGetCollections() { //watcher saga
    yield takeEvery(types.GET_COLLECTIONS, getCollections)
}

// Get Collection
function* getCollection({id}) { //worker saga
    const collectionData = yield call(productServices.getCollection, id)
    yield put(shopActions.gotCollectionAction(collectionData))
}

function* watchGetCollection() { //watcher saga
    yield takeEvery(types.GET_COLLECTION, getCollection)
}

// Create Checkout Instance
function* postCreateCheckout({checkout}) { //worker saga
    const token = yield call(checkoutServices.createCheckout, checkout)
    yield put(shopActions.postCreatedCheckoutAction(token))
}

function* watchPostCreateCheckout() { //watcher saga
    yield takeEvery(types.CHECKOUT_CREATE, postCreateCheckout)
}

export function* shopSaga() {
    yield all([
        watchGetProducts(),
        watchGetProduct(),
        watchtoggleCartItem(),
        watchPopulateCart(),
        watchGetCollections(),
        watchGetCollection(),
        watchPostCreateCheckout()
    ])
}