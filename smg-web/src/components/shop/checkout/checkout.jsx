import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/styles'

import ConfirmCheckout from './ConfirmCheckout'
import CheckoutList from './CheckoutList'
import ShopHero from '../../shared/Hero/ShopHero'

import { getPopulateCartAction } from '../../../store/actions/shopActions'

import { Grid, Container, Box } from '@material-ui/core'

const Checkout = (props) => {
    const {cart, cartData, populateCart} = props
    const classes = useStyles()
    const [subtotal, setSubtotal] = useState(0.00)
    const [lineItemsData, setLineItemsData] = useState([])

    useEffect(() => {
        populateCart(cart)
    }, [cart])

    useEffect(() => {
        let total = 0
        let lineItems = []

        cartData.map(cd => {
            total = total + parseFloat(cd.variants[0].price)
            lineItems.push({
                "variant_id" : cd.variants[0].id,
                "quantity" : 1
            })
        })

        setLineItemsData(lineItems)
        setSubtotal(total)
    }, [cartData])

    return(
        <>
            <ShopHero />
            <Box component="section" className={classes.storeSection} m={0}> 
                <div className={classes.storeBG}>
                </div>
                <Container maxWidth="lg">
                    <Grid m={0} container spacing={0}>
                        <h1 className={classes.pageTitle}>Review Your Order</h1>
                        <Grid className={`${classes.storeList}`} item xs={12} lg={9}>
                            <CheckoutList cartData={cartData} />
                        </Grid>
                        <Grid item xs={12} md={4} lg={3}>
                            <ConfirmCheckout lineItems={lineItemsData} cartData={cartData} subtotal={subtotal} />
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        cart: state.shop.cart,
        cartData: state.shop.cartData
    }
}

const mapDispatchToProps = (dispatch) => ({
    populateCart : (ids) =>  {
        dispatch(getPopulateCartAction(ids))
    }
})

const useStyles = makeStyles({
    storeBG : {
        backgroundColor: '#f1f6fb',
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        zIndex: -1
    },
    storeSection : {
        position: 'relative'
    },
    storeList : {
        display: 'flex',
        flexFlow: 'column nowrap'
    },
    pageTitle : {
        fontSize: '36px',
        margin: '0 auto 2rem 0',
        width: '100%',
        borderBottom: '1px solid #183545'
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Checkout)