import React from 'react'

import { makeStyles } from '@material-ui/styles'
import { Paper } from '@material-ui/core'

const ShoppingCartItem = (props) => {
    const salesInfo = props.variants
    let title = props.title
    let image = props.image.src
    let price = typeof salesInfo !== 'undefined' ? salesInfo[0].price : 0
    const classes = useStyles()

    return (
        <Paper className={classes.root} elevation={3}>
            <img className={classes.image} src={image} />
            <p className={classes.title}>{title}</p>
            <p className={classes.price}>{price}</p>
        </Paper>
    )
}

const useStyles = makeStyles({
    root : {
        alignSelf: 'center',
        display: 'flex',
        flexFlow: 'column nowrap',
        padding: '12px',
        width: '120px',
        height: '140px',
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
    },
    price :{
        margin: 0,
        fontWeight: 'bold',
        fontSize: '16px'
    }
})

export default ShoppingCartItem