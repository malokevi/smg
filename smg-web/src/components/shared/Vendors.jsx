import React from 'react'

import Paper from '@material-ui/core/Paper'
import {makeStyles} from '@material-ui/core'
import ScrollAnimation from 'react-animate-on-scroll'

import FisherPaykalLogo from '../../assets/images/vendors/fisher-and-paykel.png'
import KegoLogo from '../../assets/images/vendors/kego.png'
import PhillipsLogo from '../../assets/images/vendors/phillips.png'
import ResmedLogo from '../../assets/images/vendors/resmed.png'

const Vendors = () => {
    const classes = useStyles()

    return (
        <Paper className={classes.vendorsContainer}>
            <ScrollAnimation className={classes.vendors} animateIn="animate__fadeIn">
                <img alt={`Fisher And Paykel Logo`} className={classes.vendor} src={FisherPaykalLogo} />
                <img alt={`Kego Logo`} className={classes.vendor} src={KegoLogo} />
                <img alt={`Phillips Resperonics Logo`} className={classes.vendor} src={PhillipsLogo} />
                <img alt={`Resmed Logo`} className={classes.vendor} src={ResmedLogo} />
            </ScrollAnimation>
        </Paper>
    )
}

const useStyles = makeStyles({
    vendorsContainer: {
        overflow: 'hidden',
        padding: '24px 0',
        borderLeft: 'none',
        borderRight: 'none',
        borderRadius: '0',
        backgroundColor: '#acd5ff'
    },
    vendors: {
        display: 'flex',
        flexFlow: 'row wrap',
    },
    vendor : {
        alignSelf: 'center',
        maxWidth: '200px',
        margin: 'auto',
        maxHeight: '94px',
        padding: '16px 36px'
    }
})

export default Vendors