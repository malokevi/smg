import React from 'react'
import { Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

import AdminNav from './AdminNav'

const useStyles = makeStyles({
    adminSection : {

    }
})

const Admin = () => {
    const classes = useStyles()
    
    return (
        <Box component="section" className={classes.adminSection} m={0}> 
            <div className={classes.adminNav}></div>
        </Box>
    )
}

export default Admin