import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/styles'

import ListProducts from '../shop/ListProducts'
import ProductNav from '../shop/ProductNav'
import ShopHero from '../shared/Hero/ShopHero'
import { Grid, Box, Container } from '@material-ui/core'

import history from '../../history'

import {getCollectionAction} from '../../store/actions/shopActions'

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
    }
})


const Category = (props) => {
    const {getCollection, collection} = props
    const classes = useStyles()
    const path = history.location.pathname
    const collectionId = path.substr(path.lastIndexOf('/') + 1);

    useEffect(() => {
        getCollection(collectionId)
    }, [collectionId])

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
                        <Grid className={`${classes.storeList}`} item xs={12} lg={9}>
                            <ListProducts title={`shop id-${collectionId}`} products={collection} />
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    )
}


const mapStateToProps = (state) => {
    return {
        collection: state.shop.collection
    }
}

const mapDispatchToProps = (dispatch) => ({
    getCollection : (id) => {
        dispatch(getCollectionAction(id))
    }      
})

export default connect(mapStateToProps, mapDispatchToProps)(Category)