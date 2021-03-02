import React from 'react';
import {connect} from 'react-redux'

import { makeStyles } from '@material-ui/core/styles'
import { Card, CardHeader, CardContent, CardActions, IconButton } from '@material-ui/core'
import EmailIcon from '@material-ui/icons/Email'
import PhoneIcon from '@material-ui/icons/Phone'
import PrintIcon from '@material-ui/icons/Print'
import HomeIcon from '@material-ui/icons/Home'
import RoomIcon from '@material-ui/icons/Room'

const LocationCard = (props) => {
    const classes = useStyles();
    const { title, email, phone, tollfree, fax, address, address2, description, map, maps, lat, lng, activeCard } = props
    const classList = activeCard === title ? 'location-card location-card--active' : 'location-card'

    const mapButton = (e) => {
      map.setZoom(8)
      setTimeout(() => {
        map.panTo(new maps.LatLng(lat, lng))
      },400)
      setTimeout(() => {
        map.setZoom(15)
      },800)

      document.getElementById(`map-anchor`).scrollIntoView({ behavior: 'smooth', block: 'center' })   
    }

    return (
        <Card id={`location-${title}`} className={`${classes.root} ${classList}`} elevation={3}>
            <CardHeader className={classes.cardheader}
            title={title}
            />
            <CardContent>
              {typeof description !== 'undefined' ? <p className={classes.description}>{description}</p> : ''}
              <p className={classes.contact}><HomeIcon /> {address}<br />{address2}</p>
              <p className={classes.contact}><EmailIcon /> {email}</p>            
              <p className={classes.contact}><PhoneIcon /> {phone}</p>
              {typeof tollfree !== 'undefined' ? <p className={classes.contact}><PhoneIcon className={classes.iconSmall} /> {tollfree}</p> : ''}
              <p className={classes.contact}><PrintIcon /> {fax}</p>
            </CardContent>
            <CardActions className={classes.actions} disableSpacing>
              <IconButton component={() => 
                <a className="MuiButtonBase-root MuiIconButton-root" href={`tel:${phone}`}>                  
                  <PhoneIcon className={classes.icons} />
                </a>} 
                aria-label="phone SMG">
              </IconButton>
              <IconButton component={() => 
                <a className="MuiButtonBase-root MuiIconButton-root" href={`mailto:${email}`}>                  
                  <EmailIcon className={classes.icons} />
                </a>} 
                aria-label="Email SMG"
              >
              </IconButton>
              <IconButton onClick={() => mapButton()} aria-label="View The Map">
                  <RoomIcon className={classes.icons} />
              </IconButton>
            </CardActions>
        </Card>
    )
}

const MapStateToProps = (state) => ({
  map : state.map.map,
  maps: state.map.maps,
  activeCard: state.options.activeCard
})

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '100%',
    borderRadius: '12px',
    cursor: 'pointer',
    marginBottom: '1.2rem',
    backgroundColor: 'white',
    border: '2px solid rgb(24 53 69)',
    color: 'rgb(24 53 69)',
    '&:last-of-type' : {
      marginBottom: 0
    },
    '&:hover' : {
      boxShadow: '0px 0px 60px inset #00000026'
    },
    '&.location-card--active' : {
      boxShadow: '0 0 6px inset #007fff'
    }
  },
  cardheader : {
    paddingBottom: '4px',
    '& span' : {
      fontSize: '30px',
      fontWeight: 400
    }
  },
  icons : {
    color: 'rgb(24 53 69)'
  },
  description : {
    marginBottom: '24px',
    marginTop: 0,
    fontSize: '16px'
  },
  contact: {
    fontSize : '14px',
    display: 'flex',
    flexFlow: 'row nowrap',
    alignItems: 'center',
    marginTop: 0,
    marginBottom: '5px',
    fontWeight: 500,
    '& svg' : {
      marginRight : '12px',
      fontSize: '18px'
    }
  },
  actions : {
    paddingTop: 0
  }
}))

export default connect(MapStateToProps, false)(LocationCard)
