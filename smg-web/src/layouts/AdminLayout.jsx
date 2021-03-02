import React, {useEffect} from 'react';
import {useLocation, Route, Switch} from 'react-router-dom'
import {connect} from 'react-redux'
import {makeStyles} from '@material-ui/styles'

import HomePage from '../components/homepage'
import Error404 from '../components/error404'
import Admin from '../components/admin/admin'
import AdminHead from '../components/admin/AdminHead'

const useStyles = makeStyles({
    adminGrid : {
        display: 'grid',
        gridTemplateColumns: '250px',
        gridTemplateRows: '100%'
    },
    adminHeader : {

    }, 
    adminNav : {

    }, 
    adminBody : {

    }
})

const AdminLayout = (props) => {
  const {setUser, setCart} = props
  const location = useLocation();
  const classes = useStyles()

    return (
        <div className={classes.adminGrid}>
            <div className={classes.adminHeader}></div>
            <div className={classes.adminNav}>

            </div>
            <div className={classes.adminBody}>
                <Switch location={location}>
                    <Route path="/admin" exact component={Admin} />
                    <Route path="/" exact component={HomePage} />
                    <Route path="/**" component={Error404} />
                </Switch>
            </div>
        </div>
    )
}

export default AdminLayout