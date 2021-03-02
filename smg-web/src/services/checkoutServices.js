import Axios from 'axios'

const checkoutUrl = `${process.env.REACT_APP_API_URL}/checkout`

//Get Products
export const createCheckout = (checkout) => {
    const products = Axios.get(`${checkoutUrl}/createcheckout`, {
        params : checkout
    }).then(result => result.data)
    return products
}
