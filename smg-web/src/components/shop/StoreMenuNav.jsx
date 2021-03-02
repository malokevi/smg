import React from 'react'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/styles'
import { userLogoutAction } from '../../store/actions/authActions'
import { toggleShopNavAction } from '../../store/actions/optionActions'

import CategoriesIcon from '../../assets/images/icons/categories-icon.png'
import CartIcon from '../../assets/images/icons/cart-icon.png'
import StoreIcon from '../../assets/images/icons/store-icon.png'
import LoginIcon from '../../assets/images/icons/login-icon.png'
import LogoutIcon from '../../assets/images/icons/logout-icon.png'
import AccountIcon from '../../assets/images/icons/account-icon.png'

const StoreMenuNav = (props) => {
    const {history, isAuthed, userLogout, toggleShopNav, setActiveNav, activeNav} = props
    const classes = useStyles()

    let buttons = [
        {
            label : 'Product Categories',
            icon: CategoriesIcon
        },
        {
            label : 'Store',
            redirect : '/shop',
            icon: StoreIcon
        },
        {
            label : 'Login',
            redirect : '/login',
            icon: LoginIcon
        }
    ]

    if(isAuthed === true) {
        buttons = [
            {
                label : 'Product Categories',
                icon: CategoriesIcon
            },
            {
                label : 'Store',
                redirect : '/Shop',
                icon: StoreIcon
            },
            {
                label : 'Cart',
                icon: CartIcon
            },
            {
                label : 'My Account',
                redirect : '/account',
                icon: AccountIcon
            },
            {
                label : 'Logout',
                icon: LogoutIcon
            }

        ]
    }

    const handleClick = (label, redirect = null) => {
        if(label === 'Logout') {
            userLogout()
            toggleShopNav()
        } else if(redirect !== null) {
            history.push(redirect)
            toggleShopNav()
        } else {
            setActiveNav(label)
        }
    }

    return (
        buttons.map(({label, redirect, icon}) => {
             return (
                <button onClick={() => handleClick(label, redirect)} className={`${classes.navButton} ${activeNav === label ? 'active' : ''}`}>
                    <img className={classes.icon} src={icon} />
                    <p className={classes.text}>{label}</p>
                </button>
             )
        })
    )
}

const MapDispatchToProps = (dispatch) => {
    return {
        userLogout : () => {
            dispatch(userLogoutAction())
        },
        toggleShopNav : () => {
            dispatch(toggleShopNavAction())
        }
    }
}

const useStyles = makeStyles({
    navButton : {
        backgroundColor: '#1970bb',
        color: 'white',
        textDecoration: 'none',
        cursor: 'pointer',
        textAlign: 'center',
        width: '40%',
        padding: '10px',
        display: 'flex',
        flexFlow: 'column nowrap',
        borderRadius: '4px',
        border: 'none !important',
        outline: 'none !important',
        margin: '0 0 12px 12px',
        flexGrow: 2,
        transition: 'all .15s ease-in-out',
        fontSize: '20px',
        fontFamily: 'Roboto, arial, serif',
        lineHeight: '1.2',
        alignItems: 'center',
        boxShadow: '0 0 0 0px #6b6b6b',
        '&.active' : {
            backgroundColor: '#008cac',
            boxShadow: '0 0 7px 0px #6b6b6b'
        }
    },
    icon : {
        maxHeight: '35px',
        alignSelf: 'center',
        margin: 'auto auto 8px auto'
    },
    text : {
        margin: '0 0 auto 0',
        textAlign: 'center',
        width: '100%'
    }
})

export default connect(false, MapDispatchToProps)(StoreMenuNav)