import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { makeStyles } from '@material-ui/styles'
import { Button } from '@material-ui/core'

import { getProductsAction, getPopulateCartAction } from '../../store/actions/shopActions'
import { toggleShopNavAction } from '../../store/actions/optionActions'

import ShoppingCartItem from './ShoppingCartItem'

const ShoppingCart = (props) => {
    const {populateCart, cartItems, cartData, toggleShopNav} = props
    const classes = useStyles()

    useEffect(() => {
        populateCart(cartItems)
    }, [cartItems])

    if(typeof cartData !== 'undefined') {
        return (
            <div className={classes.shoppingCartContainer}>
                <div className={classes.cartItemsContainer}>
                    {cartData.map(c => <ShoppingCartItem {...c} />)}
                </div>
                <div className={classes.cartTotals}>
                    <p>Subtotal: <span>59.99</span></p>
                    <span className={classes.divider}></span>
                    <Link className={classes.checkoutBtn} to="/shop/checkout">
                        <Button onClick={() => toggleShopNav()} color="primary" variant="contained">Checkout</Button>
                    </Link>
                </div>
            </div>
        )
    } else {
        return (
            <div className={classes.shoppingCartContainer}>
            </div>
        )
    }
}

const MapStateToProps = (state) => {
    return {
        cartItems : state.shop.cart,
        product : state.shop.product,
        cartData : state.shop.cartData
    }
}

const MapDispatchToProps = (dispatch) => {
    return {
        getProducts : () =>  {
            dispatch(getProductsAction())
        },
        populateCart : (ids) =>  {
            dispatch(getPopulateCartAction(ids))
        },
        toggleShopNav : () => {
            dispatch(toggleShopNavAction())
        }
    }
}

const useStyles = makeStyles({
    cartItemsContainer : {
        display: 'flex',
        flexFlow: 'row wrap'
    },
    shoppingCartContainer : {
        display: 'flex',
        flexFlow: 'column nowrap',
        height: '100%'
    },
    cartTotals : {
        display: 'flex',
        flexFlow: 'row nowrap',
        margin: 'auto 0 0 auto',
        width: '100%', 
        borderTop: '1px solid #183545',
        flexFlow: 'row nowrap',
        paddingTop: '12px',
        '& p' : {
            margin: '0 0 0 auto',
            fontSize: '16px',
            lineHeight: 1,
            alignSelf: 'center',
            '& span' : {
                fontWeight: 'bold'
            }
        }
    },
    divider : {
        height: '22px',
        width: '1px',
        backgroundColor: '#151515',
        margin: 'auto 16px'
    },
    checkoutBtn : {
        textDecoration: 'none'
    }
})

export default connect(MapStateToProps, MapDispatchToProps)(ShoppingCart)