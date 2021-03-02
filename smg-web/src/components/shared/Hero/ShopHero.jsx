import React from 'react'
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/styles'

const ShopHero = () => {
    const classes = useStyles()

    return (
        <Box className={classes.root} component="section" m={0} p={0}>
        </Box>
    )
}

const useStyles = makeStyles({
    root : {
        paddingTop: '140px',
        backgroundColor: '#f1f6fb'
    }
})

export default ShopHero