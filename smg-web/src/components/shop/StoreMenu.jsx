import React, { useState } from 'react'
import { makeStyles } from '@material-ui/styles'
import { connect } from 'react-redux'
import history from '../../history'

import StoreMenuNav from './StoreMenuNav'
import ShoppingCart from './ShoppingCart'
import ShopCategories from './ShopCategories'

import { Container, Grid } from '@material-ui/core'

const StoreMenu = (props) => {
    const classes = useStyles()
    const {isAuthed, storeMenuToggle} = props
    const [activeShopNav, setActiveShopNav] = useState('Product Categories')

    return (
        <Container maxWidth="lg" className={`${classes.container}`}>
            <div className={`${classes.root} ${storeMenuToggle === true ? 'active' : ''}`}>
                <Grid container className={classes.innerContainer}>
                    <Grid item xs={12} md={5} lg={3} className={classes.navigation}>
                        <StoreMenuNav activeNav={activeShopNav} setActiveNav={setActiveShopNav} history={history} isAuthed={isAuthed} />
                    </Grid>
                    <Grid item xs={12} md={7} lg={9} className={classes.content}>
                        {activeShopNav === 'Cart' ? <ShoppingCart /> : ''}
                        {activeShopNav === 'Product Categories' ? <ShopCategories /> : ''}
                    </Grid>
                </Grid>
            </div>
        </Container>
    )
}

const MapStateToProps = (state) => ({
    isAuthed : state.auth.isAuthenticated,
    storeMenuToggle : state.options.toggleShopNav
})

const useStyles = makeStyles({
    container : {
        position: 'relative'
    },  
    root : {
        backgroundColor: '#f1f6fb',
        width: '100%',
        height: '0',
        position: 'absolute',
        top: '100%',
        left: 0,
        display: 'flex',
        flexFlow: 'row nowrap',
        overflow: 'hidden',
        transition: 'all .25s ease-in-out',
        boxShadow: '0px 2px 16px #4b4b4b',
        borderRadius: '0 0 4px 4px',
        '@media(min-width: 992px)' : {
            width: '96%',
            left: '2%'
        },
        '&:before' : {
            boxShadow: 'inset 1px 4px 16px -3px #4b4b4b',
            content: '""',
            position: 'absolute',
            top: 0,
            left: '-12px',
            right: '-12px',
            height: '102%',
            display: 'block'
        },
        '&.active' : {
            height: '378px'
        }
    },
    navigation : {
        padding: '18px 18px 6px 6px',
        display: 'flex',
        maxHeight: '100%',
        overflow: 'auto',
        flexFlow: 'row wrap',
        '&::-webkit-scrollbar-track' : {
            webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.3)',
            backgroundColor: 'transparent',
            borderRadius: '2px'
        },
        '&::-webkit-scrollbar' : {
            width: '6px',
            backgroundColor: 'transparent'
        },
        '&::-webkit-scrollbar-thumb' :
        {
            borderRadius: '10px',
            backgroundImage: "-webkit-gradient(linear,left bottom,left top,color-stop(0.44, rgb(122,153,217)),color-stop(0.72, rgb(73,125,189)),color-stop(0.86, rgb(28,58,148)))"
        }
    },
    content : {
        padding: '18px 18px 18px 0'
    },
    innerContainer : {
        zIndex: 2
    }
})

export default connect(MapStateToProps)(StoreMenu)