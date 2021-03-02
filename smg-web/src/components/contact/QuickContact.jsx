import React, {useState} from 'react'
import {makeStyles} from '@material-ui/styles'
import {Box} from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton'
import EmailIcon from '@material-ui/icons/Email'
import PhoneIcon from '@material-ui/icons/Phone'
import PrintIcon from '@material-ui/icons/Print'
import HomeIcon from '@material-ui/icons/Home'
import RoomIcon from '@material-ui/icons/Room'
import Locations from '../../assets/data/locations'

const QuickContact = () => {
    const classes = useStyles()
    const [active, setActive] = useState(0)
    let currentData = Locations[active]

    return(
        <Box className={classes.quickBox}>
            <h3>Visit Us In Store</h3>
            <div className={classes.quickNav}>
                {Locations.map((l, index) => {
                    return (
                        <div onClick={() => setActive(index)} className={`${classes.quickNavItem} ${index === active ? classes.activeQuickNav : ''}`}>
                            <p>{l.title}</p>
                        </div>
                    )
                })}
            </div>
            <div className={classes.quickInfo}>
                <article>
                    {typeof description !== 'undefined' ? <p className={classes.description}>{currentData.description}</p> : ''}
                    <p className={classes.contact}><HomeIcon /> {currentData.address}<br />{currentData.address2}</p>
                    <p className={classes.contact}><EmailIcon /> {currentData.email}</p>            
                    <p className={classes.contact}><PhoneIcon /> {currentData.phone}</p>
                    {typeof currentData.tollfree !== 'undefined' ? <p className={classes.contact}><PhoneIcon className={classes.iconSmall} /> {currentData.tollfree}</p> : ''}
                    <p className={classes.contact}><PrintIcon /> {currentData.fax}</p>

                    <div className={classes.iconBlock}>
                        <IconButton component={() => 
                            <a className="MuiButtonBase-root MuiIconButton-root" href={`tel:${currentData.phone}`}>                  
                            <PhoneIcon className={`${classes.contactAction} ${classes.icons}`} />
                            </a>} 
                            aria-label="phone SMG">
                        </IconButton>
                        <IconButton className={classes.contactAction} component={() => 
                            <a className="MuiButtonBase-root MuiIconButton-root" href={`mailto:${currentData.email}`}>                  
                            <EmailIcon className={`${classes.contactAction} ${classes.icons}`} />
                            </a>} 
                            aria-label="Email SMG"
                        >
                        </IconButton>
                        <IconButton className={classes.contactAction} onClick={() => {}} aria-label="View The Map">
                            <RoomIcon className={`${classes.contactAction} ${classes.icons}`} />
                        </IconButton>
                    </div>
                </article>
            </div>
        </Box>
    )
}

const useStyles = makeStyles({
    quickBox : {
        display: 'flex',
        flexFlow: 'row nowrap',
        backgroundColor: '#004da2',
        width: '100%',
        maxWidth: '600px',
        margin: 'auto',
        borderRadius: '8px',
        boxShadow: '-7px 7px 26px -2px #2e2e2e',
        position: 'relative',
        '@media(max-width: 720px)' : {
            flexFlow: 'column nowrap'
        },
        '& h3' : {
            top: '-50px',
            left: 0,
            margin: 0,
            fontSize: '38px',
            position: 'absolute',
            width: '100%'
        }
    },
    quickNav : {
        display: 'flex',
        flexFlow: 'column nowrap',
        width: '30%',
        backgroundColor: '#183545',
        borderRadius: '8px 0 0 8px',
        overflow: 'hidden',
        minWidth: '150px',
        '@media(max-width: 720px)' : {
            flexFlow: 'row wrap',
            width: '100%',
            borderRadius: '8px 8px 0 0'
        },
    },
    quickNavItem : {
        width: '90%',
        padding: '16px 5%',
        cursor: 'pointer',
        backgroundColor: '#183545',
        transition: 'all .25s ease-in-out',
        borderBottom: '1px solid rgba(191,191,191,.2)',
        '@media(max-width: 720px)' : {
            width: '200px',
            flexGrow: 2,
            textAlign: 'center'
        },
        '&:hover' : {
            backgroundColor: '#004da2'
        },
        '& p' : {
            color: 'white',
            margin: 0,
            fontSize: '20px',
            '@media(max-width: 720px)' : {
                fontSize: '16px'
            }
        }
    },
    quickInfo : {
        padding: '16px 24px',
        flexGrow: 2,
        display: 'flex',
        '@media(max-width: 720px)' : {
            padding: '12px 8px',
        },
        '& article' : {
            position: 'relative',
            margin: 'auto',
            padding: '18px 24px 44px',
            backgroundColor: 'rgba(24,53,69,.2)',
            width: '100%',
            '@media(max-width: 720px)' : {
                padding: '18px 12px 44px',
            }
        },
        '& article p' : {
            color: 'white',
            marginTop: 0,
            fontSize: '16px',
            alignItems: 'center',
            display: 'flex',
            '@media(max-width: 720px)' : {
                fontSize: '14px'
            },
            '&:last-of-type' : {
                marginBottom: 0
            },
            '& svg' : {
                marginRight: '12px'
            }
        }
    },
    contactAction : {
        color: '#fae941'
    },
    activeQuickNav : {
        backgroundColor: '#004da2',
        fontWeight: 'bold'
    },
    iconBlock : {
        position: 'absolute',
        right: 0,
        bottom: 0
    }
})

export default QuickContact