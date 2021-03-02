import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Link } from 'react-router-dom'
import { Paper, TextField, Button } from '@material-ui/core'
import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart'

const CheckoutList = (props) => {
    const {cartData} = props
    const classes = useStyles()

    return (
        <div className={classes.cartList}>
            {cartData.map(cd => {
                return (
                    <Paper elevation={3} className={classes.cartListItem}>
                        <img className={classes.itemImage} src={cd.image.src} />
                        <div className={classes.infoBlock}>
                            <h2>{cd.title}</h2>
                            <div className={classes.infoContain}>
                                <div className={classes.itemInfo}>
                                    <p className={classes.price}>Price: <span>${cd.variants[0].price}</span></p>
                                    <p className={classes.price}>Quantity: <TextField type={'number'} className={classes.textField} value={1} variant="outlined" /></p>

                                    <p className={`${classes.extraInfo} first-of`}>Product ID: {cd.id}</p>
                                    <p className={classes.extraInfo}>Product Weight: {cd.variants[0].grams} grams</p>
                                </div>
                                <div className={classes.itemOptions}>
                                    <Link className={classes.link} to={`product/${cd.id}`}>
                                        <Button
                                            variant="outlined"
                                            color="primary"
                                            className={classes.button}
                                        >
                                            Product Page
                                        </Button>
                                    </Link>
                                    <Button
                                        variant="contained"
                                        color="secondary"
                                        className={classes.button}
                                        startIcon={<RemoveShoppingCartIcon />}
                                    >
                                        Remove From Cart
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </Paper>
                )
            })}
        </div>
    )
}

const useStyles = makeStyles({
    cartList : {
        display: 'flex',
        flexFlow: 'column nowrap',
        marginRight: '24px'
    },
    cartListItem : {
        display: 'flex',
        flexFlow: 'row nowrap',
        marginBottom: '24px',
        padding: '16px',
        '&:last-of-type' : {
            marginBottom: 0
        }
    },
    infoBlock : {
        display: 'flex',
        flexFlow: 'column nowrap',
        padding: '0 18px',
        flexGrow: 2,
        '& h2' : {
            margin: '0 0 2px',
            fontSize: '24px',
            borderBottom: '1px solid #183545'
        }
    },
    itemInfo : {
        display: 'flex',
        flexFlow: 'column nowrap',
        flexGrow: 2
    },
    itemOptions : {
        display: 'flex',
        flexFlow: 'column nowrap'
    },
    price : {
        fontSize: '18px',
        margin: '0 auto 0 0',
        display: 'flex',
        alignItems: 'center',
        '& span' : {
            fontWeight: 'bold',
            marginLeft: '12px'
        }
    },
    extraInfo : {
        margin: '0 auto 0 0',
        fontSize: '14px',
        '&.first-of' : {
            marginTop: 'auto'
        }
    },
    itemImage : {
        height: '150px'
    },
    textField : {
        marginLeft: '12px',
        maxWidth: '55px',
        '& input' : {
            padding: '4px'
        }
    },
    infoContain : {
        display: 'flex',
        flexFlow: 'row nowrap',
        flexGrow: 2,
        padding: '8px 0 0'
    },
    button : {
        marginTop: '10px',
        width: '100%'
    },
    link : {
        width: '100%',
        marginTop: 'auto',
        textDecoration: 'none',
        '& button' : {
            marginTop: 0
        }
    }
})

export default CheckoutList