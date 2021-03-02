import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/styles'
import { Box, Button } from '@material-ui/core'

import { toggleCartItemAction } from '../../store/actions/shopActions'

const ListProducts = (props) => {
    const {products, toggleCart, cart, isAuthed, title} = props
    const classes = useStyles()

    const handleToggleCart = (event, id) => {
        event.preventDefault()
        toggleCart(id)
    }

    const handleLoginModal = () => {
        console.log('login modal')        
    } 

    const addToCartBtn = (auth, id, isInCart) => {
        return (
            <Button className={classes.addToCartBtn} variant="contained" color="primary" onClick={(e) => auth === true ? handleToggleCart(e, id) : handleLoginModal() }>
                { isInCart === false ? 'Add To Cart' : 'Remove From Cart' }
            </Button>
        )
    }

    if(typeof products !== 'undefined') {
        return(
            <>
                <h1 className={classes.pageTitle}>{title}</h1>
                <Box component="article" className={classes.listProducts} m={0}> 
                    {products.map(p => {
                        const id = p.id                        
                        const image = p.image.src
                        const title = p.title
                        const price = p.variants[0].price 
                        const isInCart = isAuthed === true ? cart.includes(id) : false                        

                        return (
                            <Link className={classes.productListItem} to={`/shop/product/${id}`}>
                                <img className={classes.image} src={image} />
                                <h2 className={classes.title}>{title}</h2>
                                <p className={classes.price}><span>Price:</span> {price}</p>
                                <div className={classes.buttonGroup}>
                                    {addToCartBtn(isAuthed, id, isInCart)}
                                    <Button className={classes.label} color="primary">Product Page</Button>
                                </div>
                            </Link>
                        )
                    })}
                </Box>
            </>
        )
    } else {
        return( 
            <p>loading...</p>
        )
    }
}

const MapDispatchToProps = (dispatch) => {
    return {
        toggleCart : id => dispatch(toggleCartItemAction(id))
    }
}

const MapStateToProps = (state) => {
    return {
        cart : state.shop.cart,
        isAuthed : state.auth.isAuthenticated
    }
}

const useStyles = makeStyles({
    pageTitle : {
        margin: 0,
        borderBottom: '1px solid #222222',
        width: '100%',
        fontSize: '36px',
        height: '49px',
        margin: '0 0 25px 25px',
        color: '#222222'
    },  
    listProducts : {
        display: 'flex',
        flexFlow: 'row wrap',
        width: '100%',
        alignSelf: 'start'
    },
    productListItem : {
        display: 'flex',
        flexFlow: 'column nowrap',
        backgroundColor: 'white',
        padding: '16px',
        maxWidth: '250px',
        width: '250px',
        margin: '0 0 25px 25px',
        boxShadow: '2px 3px 16px #bcbcbc' ,
        color: '#444444',
        textDecoration: 'none',
    },
    image: {
        maxHeight: '176px',
        alignSelf: 'center',
        marginBottom: '24px'        
    },
    title: {
        margin: '0 auto 8px 0',
        fontSize: '24px',
        lineHeight: '1.2',
        fontFamily: 'Roboto, arial, serif',
    },
    price : {
        margin: '0 auto 24px 0',
        fontWeight: 'bold',
        fontFamily: 'Roboto, arial, serif',
        '& span' : {
            fontWeight: 'normal'
        } 
    },
    buttonGroup : {
        display: 'flex',
        flexFlow: 'row nowrap',
        width: '100%',
        marginTop: 'auto',
        '& button' : {
            width: '48%'
        },
        '& button:first-of-type' : {
            marginRight: 'auto',
            backgroundColor: '#1970bb'
        }
    },
    label : {
        color: '#1970bb'
    }
})

export default connect(MapStateToProps, MapDispatchToProps)(ListProducts)