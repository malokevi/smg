import Axios from 'axios'

const productsUrl = `${process.env.REACT_APP_API_URL}/products`
const checkoutUrl = `${process.env.REACT_APP_API_URL}/checkout`

//Get Products
export const getProducts = () => {
  const products = Axios.get(`${productsUrl}/products`).then(result => result.data)
  return products
}

//Get Product
export const getProduct = (id) => {
  const product = Axios.get(`${productsUrl}/product`, {
      params: {
        id: id
      }
    }).then(result => result.data)

  return product
}

//Get Collections
export const getCollections = () => {
  const collections = Axios.get(`${productsUrl}/collections`).then(result => result.data)

  return collections
}

//Get Collection
export const getCollection = (id) => {
  const collection = Axios.get(`${productsUrl}/collection`, {
      params: {
        id: id
      }
    }).then(result => result.data)

  return collection
}

//Populate Cart
export const populateCart = (ids) => {
  const cartData = Axios.get(`${productsUrl}/productList`, {
    params: {
      ids: ids
    }  
  }).then(result => result.data)

  return cartData
}

//Toggle Cart Item
export const toggleCartItem = (id) => {
  let cart = JSON.parse(localStorage.getItem("smgCartData"))
  let cartData = []
  let removeItem = false

  if(cart == null) {
    cartData.push(id)
  } else {
    cart.map(c => {
      if(id === c) {
        removeItem = true
      } else {
        cartData.push(c)     
      }
    })

    if(removeItem === false) {
      cartData.push(id)
    }  
  }

  localStorage.setItem("smgCartData", JSON.stringify(cartData))

  return cartData
}