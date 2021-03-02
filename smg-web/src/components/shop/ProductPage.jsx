import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/styles'
import { connect } from 'react-redux'

import ProductNav from './ProductNav'
import ShopHero from '../shared/Hero/ShopHero'
import { Grid, Container, Box, Button } from '@material-ui/core'

import { getProductAction } from '../../store/actions/shopActions'

const ProductPage = (props) => {
    const { getProduct, product } = props
    const id = props.match.params.id
    const classes = useStyles()
    const salesInfo = product.variants
    
    let title = product.title
    let image = typeof product.image !== 'undefined' ? product.image.src : ''
    let price = typeof salesInfo !== 'undefined' ? salesInfo[0].price : 0
    let description = typeof  product.body_html !== 'undefined' ? product.body_html.replace(/<\/?[^>]+(>|$)/g, "") : '' 

    useEffect(() => {
        getProduct(id)
    }, [id])

    return(
        <>
            <ShopHero />
            <Box component="section" className={classes.storeSection} m={0}> 
                <div className={classes.storeBG}>
                </div>
                <Container maxWidth="lg">
                    <Grid m={0} container spacing={0}>
                        <Grid item xs={12} md={4} lg={3}>
                            <ProductNav />
                        </Grid>
                        <Grid item xs={12} lg={9}>
                            <Grid m={0} container spacing={0}>
                                <Grid className={`${classes.productImages}`} item xs={12} md={5} lg={4}>
                                    <img src={image} />
                                </Grid>
                                <Grid className={`${classes.productInfo}`} item xs={12} md={7} lg={8}>
                                    <h2>{title}</h2>
                                    <div className={classes.priceBlock}>
                                        <p>Price: <span>${price}</span></p>
                                    </div>
                                    <p className={classes.description}>{description}</p>
                                    <Button variant="contained" color="primary" className={classes.addToCart}>
                                        Add To Cart
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        product: state.shop.product
    }
}

const mapDispatchToProps = (dispatch) => ({
    getProduct : (id) => {
        dispatch(getProductAction(id))
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
    productInfo : {
        display: 'flex',
        flexFlow: 'column nowrap',
        '& h2' : {
            margin: '0 auto 1rem 0'
        }
    },
    productImages : {
        display: 'flex',
        '& img' : {
            margin: '0 auto auto'
        }
    },
    priceBlock : {
        display: 'flex',
        flexFlow: 'row nowrap',
        margin: '0 auto 1rem 0',
        '& p' : {
            fontSize: '26px',
            margin: '0',
            '& span' : {
                fontWeight: 'bold',
                textDecoration: 'underline'
            }
        }
    },
    description : {
        margin: '0 auto 1rem 0'
    },
    addToCart : {

    }    
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage)