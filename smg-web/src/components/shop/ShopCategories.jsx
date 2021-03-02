import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { makeStyles } from '@material-ui/core'

import { getCollectionsAction } from '../../store/actions/shopActions'
import { toggleShopNavAction } from '../../store/actions/optionActions'

const ShopCategories = (props) => {
    const { getCollections, collections, toggleShopNav } = props
    const classes = useStyles()

    let title = ""
    let image = ""
    let id = ""
    
    useEffect(() => {
        getCollections()
    }, [])

    return (
        <div className={classes.root}>
            {collections.map(c => {
                title = c.collection.title
                image = c.collection.image !== undefined ? c.collection.image.src : ''
                id = c.collection.id

                if(c.collection.title !== 'Home page') {
                    return(
                        <Link onClick={() => toggleShopNav()} to={`/shop/category/${id}`}>
                            <div className={classes.collectionBox}>
                                <img className={classes.image} src={image} />
                                <p className={classes.title}>{title}</p>
                            </div>
                        </Link>
                    )
                }
            })}
        </div>
    )
}

const MapStateToProps = (state) => ({
    collections : state.shop.collections
})

const MapDispatchToProps = (dispatch) => ({
    getCollections : () => dispatch(getCollectionsAction()),
    toggleShopNav : () => dispatch(toggleShopNavAction())
})

const useStyles = makeStyles({
    root : {
        display: 'flex',
        flexFlow: 'row wrap'
    },
    collectionBox : {
        display: 'flex',
        flexFlow: 'column nowrap',
        alignItems: 'center',
        width: '120px',
        height: '120px',
        margin: '0 0 18px 18px',
        backgroundColor: 'white',
        padding: '8px',
        cursor: 'pointer',
        borderRadius: '8px',
        boxShadow: '2px 3px 16px #bcbcbc'
    },
    image : {
        maxWidth: '100%',
        margin: '0 auto 12px auto',
        height: '90px'        
    },
    title : {
        maxWidth: '100%',
        textAlign: 'left',
        fontWeight: 'bold',
        margin: 0,
        fontSize: '14px'
    }
})

export default connect(MapStateToProps, MapDispatchToProps)(ShopCategories)