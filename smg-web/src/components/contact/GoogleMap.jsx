import React, {useState} from 'react'
import GoogleMapReact from 'google-map-react'
import Config from '../../config.js'

import { addMapToStateAction } from '../../store/actions/mapActions'
import { connect } from 'react-redux'

import Marker from './Marker'

import { CircularProgress, Backdrop } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const handleApiLoaded = (map, maps, addMapToState) => {
    addMapToState(map,maps)
}

const removeLoader = (setLoader) => {
    setLoader(false)
}

const GoogleMap = (props) => {
    const { addMapToState, locationData } = props
    const classes = useStyles()
    const [loader, setLoader] = useState(true)

    return (
        <div className={classes.mapContainer} id="map-anchor">
            <Backdrop className={classes.backdrop} open={loader}>
                <CircularProgress color="inherit" />
            </Backdrop>
            <GoogleMapReact
                distanceToMouse={()=>{}} 
                bootstrapURLKeys={{ key: Config.apiKey}}
                defaultCenter={{lat: 43.343777, lng: -79.802839}}
                defaultZoom={7}
                yesIWantToUseGoogleMapApiInternals
                onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps, addMapToState)}
                onTilesLoaded={() => removeLoader(setLoader)}
            >
                {typeof locationData !== 'undefined' ? locationData.map((l, index) => <Marker key={`loc-${index}`} {...l} />) : ''}
            </GoogleMapReact>
        </div>
    )
}

const MapDispatchToProps = (dispatch) => {
    return {
        addMapToState : (map, maps) => {
            dispatch(addMapToStateAction(map, maps))
        }
    }
}

const mapStateToProps = (state) => ({
    products : state.products
})  

const useStyles = makeStyles({
    mapContainer : {
        height: '80vh', 
        width: '100%', 
        position: 'sticky', 
        borderRadius: '12px', 
        overflow: 'hidden',
        maxHeight: '380px',
        '@media(min-width: 670px)' : {
            top: '124px', 
            maxHeight: '600px',
        },
        '@media(min-width: 980px)' : {
            maxHeight: 'none',
            top: '120px', 
        }
    },
    backdrop : {
        position: 'absolute',
        zIndex: 1
    }
})

export default connect(mapStateToProps, MapDispatchToProps)(GoogleMap) 
