import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useLocation } from 'react-router-dom'
import axios from 'axios'

import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import TextField from '@material-ui/core/TextField'
import TextareaAutosize from '@material-ui/core/TextareaAutosize'
import Button from '@material-ui/core/Button'
import SendIcon from '@material-ui/icons/Send'
import Alert from '@material-ui/lab/Alert'

import Locations from '../assets/data/locations'

import LocationCard from './contact/LocationCard'
import GoogleMap from './contact/GoogleMap'

import { toggleMobileNavAction } from '../store/actions/optionActions'

import ContactVec from '../assets/images/backgrounds/contact-vector.png'
import Hero from './shared/Hero/Hero'
import BorderBottom from '../assets/images/backgrounds/gray-border-bottom.png'

const Contact = (props) => {
    const classes = useStyles();
    const heroStyle = heroStyles();
    const {toggleMobileNav} = props
    const topNodes = ['1','9','19']
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [messageSent, setMessageSent] = useState(false)
    const hash = useLocation().hash
    const locationData = Locations.locationData

    const nodeSelect = (n, index) => {
        if(topNodes.includes(index) === false) {
            const id = `${index}`
            const scrollElem = document.getElementById(id)
            if(scrollElem !== null) {
                var width = window.innerWidth
                window.scroll({top: scrollElem.offsetTop + 120, left: 0, behavior: 'smooth' })
            }
        }        
    }

    useEffect(() => {
        if(hash.length > 0) {
            const ids = {
                '#oakville' : "location-Oakville",
                '#burlington' : "location-Burlington",
                '#london' : "location-London",
                '#kitchener' : "location-Kitchener",
                '#milton' : "location-Milton"
            }
            
            nodeSelect(false, ids[hash])
        } else {
            window.scroll({top: 0, left: 0 })
        }
    }, [hash])

    useEffect(() => {
        toggleMobileNav(false)
    }, [toggleMobileNav])

    const sendMail = () => {
        axios.post('https://sleepmanagement.ca/sendmail/', {
            "name": name,
            "email": email,
            "message": message
        })
        .then(res => {
            setMessageSent(true)

            setTimeout(() => {
                setMessageSent(false)
            }, 7000)
        })
        .catch(function (error) {
            console.log(error)
            setMessageSent(false)
        })
    }

    return (
        <>
            <Hero title="Get In Touch" styles={heroStyle} image={ContactVec} subtitle="Use our location finder to determine your nearest SMG store, or contact us via phone or email!" alignBG="right" />
            <Box className={classes.container} component="section" m={0}> 
                <Container className={classes.container} maxWidth="lg" justify="center">
                    <div className={classes.root}>
                        <h2>Our Locations</h2>
                        <Grid container spacing={3} className={classes.contactGrid}>
                            <Grid item xs={12} md={4} className={classes.locationList}>
                                {Locations.map((l, index) => <LocationCard {...l} />)}
                            </Grid>
                            <Grid className={classes.mapGrid} item xs={12} md={8}>
                                <GoogleMap locationData={Locations} />
                            </Grid>
                        </Grid>
                    </div>
                    <div className={classes.contactUs}>
                        <h2>Contact Us</h2>
                        <p>Please feel free to contact us with any questions or concerns.</p>

                        <form className={classes.contactForm}>
                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={6}>
                                        <TextField onChange={(e) => setName(e.target.value)} className={classes.textField} id="name" label="Name" variant="filled" />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                        <TextField onChange={(e) => setEmail(e.target.value)} className={classes.textField} id="email" label="Email Address" variant="filled" />
                                </Grid>
                                <Grid item xs={12}>
                                        <TextareaAutosize onChange={(e) => setMessage(e.target.value)} className={classes.textArea} id="message" aria-label="Contact Form Message" rowsMin={6} placeholder="Message" />
                                </Grid>
                                {messageSent === true ? <Grid item xs={12}><Alert severity="success">Thank you for your feedback.</Alert></Grid> : ''}
                                <Grid item xs={12}>
                                    <Button 
                                        onClick={() => sendMail()}
                                        size="large"
                                        variant="contained"
                                        color="primary"
                                        className={classes.button}
                                        endIcon={<SendIcon />}
                                    >
                                        Send
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                    </div>
                </Container>
            </Box>
        </>
    )
}

const MapDispatchToProps = (dispatch) => {
    return {
        toggleMobileNav : (val) => {
            dispatch(toggleMobileNavAction(val))
        }
    }
}

const heroStyles = makeStyles((theme) => ({
    heroSwiperTwo : {
        backgroundColor: '#254d6e',
        position: 'relative',
        overflow: 'hidden',
        '& h1' : {
            color: 'white'
        },
        '& p' : {
            color: 'white',
            minWidth: '100% !important',
            '@media(min-width: 1515px)' : {
                minWidth: '110% !important',
            }
        },
        '& img' : {
            maxHeight: '651px',
            right: '-136px !important',
            bottom: '60px !important',
            opacity: '.3',
            display: 'block !important',
            maxWidth: '120%',
            height: 'auto !important',
            '@media(max-width: 670px)' : {
                right: 'auto !important',
                left: '0 !important',
                maxWidth: 'none !important',
                width: 'auto',                
            },
            '@media(max-width: 991px)' : {
                bottom: '30px !important',
            },
            '@media(min-width: 1240px)' : {
                maxHeight: '502px',
                right: '-171px !important',
                bottom: '57px !important',
                opacity: '1',
            },
            '@media(min-width: 1370px)' : {
                maxHeight: '519px',
                right: '-146px !important',
                bottom: '60px !important',
            },
            '@media(min-width: 1600px)' : {
                maxHeight: '556px',
            },
            '@media(min-width: 1800px)' : {
                maxHeight: '600px',
                width: '1000px'
            }
        }
    },
    heroBorder : {
        backgroundImage: `url(${BorderBottom})`
    }
}));

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      width: '100%',
      '& h2' : {
        marginTop: 0
      },
      "& ::-webkit-scrollbar-thumb" : {
        borderRadius: "10px",
        boxShadow: "inset 0 0 6px rgba(0,0,0,.3)",
        backgroundColor: "#797979"
        }, 
        "& ::-webkit-scrollbar-track" : {
            boxShadow: "inset 0 0 6px rgba(0,0,0,0.3)",
            borderRadius: "0px",
            backgroundColor: "#F5F5F5"
        },
        "& ::-webkit-scrollbar" : {
            width: "8px",
            backgroundColor: "#797979"
        }
    },
    container : {
        zIndex: 1,
        position: 'relative',
        backgroundColor: '#f1f6fb',
        '& h2' : {
            color: 'rgb(24 53 69)',
            borderBottom: '2px solid rgb(24 53 69)'
        }
    },
    contactGrid : {
        maxWidth: '100%',
        margin: 0,
        '@media(max-width: 959px)' : {
            margin: 0,
        }
    },
    locationList : {
        order: 1,
        paddingLeft: '0 !important',
        '@media(max-width: 959px)' : {
            padding:  '0 !important',
            order: 2            
        }
    },
    mapGrid : {
        order: 2,
        paddingRight: '0 !important',
        '@media(max-width: 959px)' : {
            marginBottom: '2rem',
            padding: '0 !important',
            order: 1,
        }
    },
    contactForm : {
        width: '100%'       
    },
    textArea : {
        backgroundColor: 'white',
        width: 'calc(100% - 26px)',
        borderRadius: '4px',
        padding: '12px',
        fontSize: '16px',
        fontFamily: 'Roboto, Helvetica, Arial, sans-serif'
    },
    textField : {
        backgroundColor: 'white',
        width: '100%',
        borderRadius: '4px',
        '& .MuiFilledInput-root' : {
            backgroundColor: 'white',
            borderRadius: '4px'
        }
    },
    contactUs : {
        '& h2' : {
            marginBottom: '16px'
        },
        "& p" : {
            marginTop: 0,
            marginBottom: '20px',
            color: 'rgb(24 53 69)',
            fontSize: '16px'
        }
    }
}));

export default connect(false, MapDispatchToProps)(Contact)
