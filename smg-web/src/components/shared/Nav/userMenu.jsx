import React, { useState } from 'react'
import { connect } from 'react-redux'

import { makeStyles } from '@material-ui/core/styles';
import { Button, Drawer } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import { userLogoutAction } from '../../../store/actions/authActions';

const UserMenu = (props) => {
    const [drawer, setDrawer] = useState(false)
    const classes = useStyles()
    const {userLogout} = props

    const toggleDrawer = (isOpen) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return
        }
    
        setDrawer(isOpen)
    }

    const handleLogout = () => {
        userLogout()
    }

    return (
        <div className={`${classes.userMenu} userMenu`}>
            <Button
                onClick={toggleDrawer(true)}
                variant="contained"
                color="primary"
                size="small"
                className={classes.button}
                startIcon={<AccountCircleIcon  />}
            >
                Login
            </Button>
            <Drawer className={classes.drawer} anchor="right" open={drawer} onClose={toggleDrawer(false)}>
                <div className={classes.drawerContent}>
                    <Button onClick={() => handleLogout()}>Logout</Button>
                </div>
            </Drawer>
        </div>
    )
}

const MapStateToProps = (state) => ({
    isAuthed: state.auth.isAuthenticated
})

const MapDispatchToProps = (dispatch) => {
    return {
        userLogout : () => dispatch(userLogoutAction())
    }
}

const useStyles = makeStyles({
    userMenu : {},
    drawerContent : {
        width: '280px'
    }
})

export default connect(MapStateToProps, MapDispatchToProps)(UserMenu)