import React from 'react'
import { Paper, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { connect } from 'react-redux'
import { postCreateCheckoutAction } from '../../../store/actions/shopActions'

const ConfirmCheckout = (props) => {
    const {subtotal, cartData, lineItems, createCheckout} = props
    const classes = useStyles()

    const handleCreateCheckout = (e) => {
        e.preventDefault()
        createCheckout({
            "line_items" : lineItems
        })
    }

    return (
        <Paper elevation={3} className={classes.root}>
            <h2>Order Confirmation</h2>
            <div className={classes.costList}>
                {cartData.map(cd => {
                    return (
                        <div className={classes.costListItem}>
                            <p>{cd.title}</p>
                            <span>${cd.variants[0].price}</span>
                        </div>
                    )   
                })}
            </div>

            <p className={classes.subTotal}>Subtotal: <span>${subtotal} CAD</span></p>
            <Button className={classes.button} color="primary" variant="contained" onClick={(e) => handleCreateCheckout(e)}>Confirm Purchase</Button>
        </Paper>
    )
}

const MapStateToProps = (state) => ({
    cart : state.shop.cart
})

const MapDispatchToProps = (dispatch) => ({
    createCheckout : (cart) => dispatch(postCreateCheckoutAction(cart)) 
})

const useStyles = makeStyles({
    root : {
        padding: '16px',
        position: 'sticky',
        top: '116px',
        '& p' : {
            margin: 0
        },
        '& p, & span' : {
            fontSize: '18px'
        },
        '& h2' : {
            fontSize: '24px',
            borderBottom: '1px solid #183545',
            margin: 0,
            width: '100%',
            marginBottom: '24px'
        }
    },
    button : {
        width: '100%',
        marginTop: '24px'
    },
    costList : {
        display: 'table',
    },
    costListItem : {
        display: 'table-row',
        '&:nth-child(odd)' : {
            backgroundColor: '#efefef'
        },
        '& p' : {
            display: 'table-cell',
            padding: '4px 8px 4px',
        },
        '& span' : {
            display: 'table-cell',
            padding: '4px 8px'
        }
    },
    subTotal : {
        marginTop: '24px !important',
        '& span' : {
            fontWeight: 'bold'
        }
    }
})

export default connect(MapStateToProps, MapDispatchToProps)(ConfirmCheckout)