import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/styles'

import ListProducts from './shop/ListProducts'
import ProductNav from './shop/ProductNav'
import ShopHero from './shared/Hero/ShopHero'
import { Grid, Container, Box } from '@material-ui/core'

import {getProductsAction} from '../store/actions/shopActions'

const Store = (props) => {
    const {getProducts, products} = props
    const classes = useStyles()

    useEffect(() => {
        getProducts()
    }, [])

    return(
        <>
            <ShopHero  />
            <Box component="section" className={classes.storeSection} m={0}> 
                <div className={classes.storeBG}>
                </div>
                <Container maxWidth="lg">
                    <Grid m={0} container spacing={0}>
                        <Grid item xs={12} md={4} lg={3}>
                            <ProductNav />
                        </Grid>
                        <Grid className={`${classes.storeList}`} item xs={12} lg={9}>
                            <ListProducts title={'Shop All Products'} products={products} />
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        products: state.shop.products
    }
}

const mapDispatchToProps = (dispatch) => ({
    getProducts : () => {
        dispatch(getProductsAction())
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
        flexFlow: 'row wrap'
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Store)