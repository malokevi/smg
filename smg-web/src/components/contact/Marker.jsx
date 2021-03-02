import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux'

import MapMarker from '../../assets/images/icons/MapMarker.png'

import { setActiveCardAction } from '../../store/actions/optionActions'

const Marker = (props) => {
    const classes = useStyles()
    const {title, setActiveCard} = props

    return (
        <div onClick={() => {
            setActiveCard(title)
            document.getElementById(`location-${title}`).scrollIntoView({ behavior: 'smooth', block: 'center' })     
        }} className={classes.marker}></div>
    )
}

const MapDispatchToProps = (dispatch) => {
    return {
        setActiveCard : (title) => {
            dispatch(setActiveCardAction(title))
        }
    }
}

const useStyles = makeStyles(() => ({
    marker : {
        height: '45px',
        width: '30px',
        backgroundImage: `url(${MapMarker})`,
        backgroundSize: 'cover',
        marginTop: '-45px',
        marginLeft: '-15px',
        cursor: 'pointer',
        transition: 'all .25s ease-in-out',
        '&:hover' : {
            transform: 'scale(1.1, 1.2) translateY(-6px)',
        }
    }
}))

export default connect(false, MapDispatchToProps)(Marker)