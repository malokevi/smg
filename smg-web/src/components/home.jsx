import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import Swiper from 'swiper'
import "swiper/swiper-bundle.min.css";

import { Container, Box, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

import ScrollAnimation from 'react-animate-on-scroll'

import Vendors from './shared/Vendors'
import ProductSlider from './shared/ProductSlider'
import {toggleMobileNavAction} from '../store/actions/optionActions'

import testimonialData from '../assets/data/testimonials.js'
import Testimonial from './shared/Testimonial'
import HomeHero from './shared/Hero/HomeHeroTwo'
import Callouts from './homepage/callouts'
import QuickContact from './contact/QuickContact'

import Clipboard from '../assets/images/backgrounds/Clipboard.jpeg'
import ContactVec from '../assets/images/backgrounds/contact-vector.png'
import LearningVec from '../assets/images/backgrounds/learning-vector.png'
import WaveyLines from '../assets/images/backgrounds/wavy-lines-bg.svg'
import GrayBorderTop from '../assets/images/backgrounds/gray-border-top.png'
import GrayBorderBottom from '../assets/images/backgrounds/gray-border-bottom.png'
import SleepingPerson from '../assets/images/backgrounds/guy-sleeping.jpg'

const HomePage = (props) => {
    const classes = useStyles()
    const {toggleMobileNav, isAuthed} = props

    useEffect(() => {
        window.scroll({top: 0, left: 0 })

        const testimonialSwiper = new Swiper('.testimonial-swiper', {
            autoplay: {
                delay: 9000
            },
            grabCursor: true,
            speed: 300,
            loop: true,
            autoHeight: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            }
        })

        window.setTimeout(() => {
            testimonialSwiper.slideNext()
        }, 500)
    }, [])

    useEffect(() => {
        toggleMobileNav(false)
    }, [toggleMobileNav])

    return (
        <>
            <HomeHero />
            <Callouts />
            <Box component="section" m={0} p={0} className={classes.waveySection}>
                <Grid m={0} className={classes.about} container spacing={0}>
                    <Grid className="aboutGrid aboutGridLeft aboutGridImage" item xs={12} lg={6}>
                        <img src={Clipboard} />
                    </Grid>
                    <Grid className="aboutGrid aboutGridRight" item xs={12} lg={6}>
                        <ScrollAnimation animateIn="animate__fadeInRight">
                            <div className="about-smg">
                                <h2>About Sleep Management Group</h2>
                                <p>Sleep Management Group (SMG) was formed to meet the rapidly growing need for support and education in the field of Obstructive Sleep Apnea.</p>
                                <p>For over 15 years we have been working closely with our clients and their physicians, partnering to provide the support needed to achieve positive outcomes. SMG is focused on creating success stories.</p>
                                <p>Our staff are highly qualified Respiratory Therapists, CPAP Therapy Specialists and Nurses with many years of experience in sleep disorder treatment. Education, training, and on-going support services are a vital part of SMG's client-centered focus. As healthcare professionals we understand the unique needs of our clients and are dedicated to providing workable solutions. SMG works closely with clients to help you choose products and accessories that will optimize your comfort and compliance levels, and suit your individual needs.</p>
                            </div>
                        </ScrollAnimation>
                    </Grid>
                </Grid>
                <Grid m={0} className={`${classes.about} ${classes.contactContainer}`} container spacing={0}>
                    <Grid className="aboutGrid aboutGridRight aboutGridContact" item xs={12} lg={6}>
                        <ScrollAnimation className={classes.animatedBox} animateIn="animate__fadeInLeft">
                            <QuickContact /> 
                        </ScrollAnimation>
                    </Grid>
                    <Grid className={`${classes.blobGrid} aboutGrid aboutGridLeft aboutGridImage`} item xs={12} lg={6}>
                        <img src={ContactVec} />
                    </Grid>
                </Grid>
                <Grid m={0} className={classes.about} container spacing={0}>
                    <Grid className={`${classes.blobGrid} aboutGrid aboutGridLeft aboutGridImage`} item xs={12} lg={6}>
                        <img src={LearningVec} />
                    </Grid>
                    <Grid item xs={12} lg={6} className="aboutGrid aboutGridRight">
                        <ScrollAnimation className={classes.testimonialTxt} animateIn="animate__fadeInRight">
                            <div className="about-smg">
                                <p className={classes.topicQuote}>
                                    "Sleep studies typically occur in a facility called a sleep center or sleep lab. These facilities have staff and equipment dedicated to diagnosing sleep disorders. There may be multiple sleep studies going on in the facility throughout the day and evening."
                                </p>
                            </div>
                        </ScrollAnimation>
                    </Grid>
                </Grid>
            </Box>
            <div className={classes.grayBorderTop}></div>
            <Box component="section" m={0} className={classes.sectionSlider}>
                <Container maxWidth="lg" justify="center" className="store-container">
                    <h2 className={classes.storeTitle}>Visit The Online Store</h2>
                    <p>Browse our inventory and make purchases online.</p>
                    <h3>Free Canadian Delivery Over $200!</h3>
                    <ProductSlider />
                </Container>
            </Box>
            <Vendors />
            <Box component="section" m={0} className={classes.sectionTestimonial}>
                <Grid m={0} className={`testimonial-grid ${classes.about}`} container spacing={0}>
                    <Grid className={`aboutGrid aboutGridLeft ${classes.testimonialImage}`} item xs={12} lg={6}>
                    </Grid>
                    <Grid className="aboutGrid aboutGridRight" item xs={12} lg={6}>
                        <div className="testimonial-swiper">
                            <div className="swiper-wrapper">
                                {testimonialData.map((t, index) => t.type === 'short' ?  <div key={`swipeslideindex-${index}`} className="swiper-slide"><Testimonial {...t} /></div> : false)}
                            </div>
                            <div className="swiper-button-next"></div>
                            <div className="swiper-button-prev"></div>
                        </div>
                    </Grid>
                </Grid>
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

const MapStateToProps = (state) => ({
        isAuthed : state.auth.isAuthenticated
})

const useStyles = makeStyles({
    flex : {
        display: 'flex',
        height: '100%'
    },
    sec1 : {
        height: "400px"
    },
    about : {
        textAlign: 'left',
        backgroundSize: 'cover',
        padding: '1rem 0',
        position: 'relative',
        '& .aboutGrid' : {
            paddingTop: '1rem',
            paddingBottom: '1rem',
            position: 'relative',
            overflow: 'hidden',
            '@media(min-width: 980px)' : {
                paddingTop: '1.5rem',
                paddingBottom: '1.5rem',
            },
            '& .about-smg' : {
                width: '90%',
                maxWidth: '800px',
                margin: 'auto',
                '& h2, p' : {
                    textAlign: 'center',
                    fontWeight: 500
                },
                '@media(min-width: 1280px)' : {
                    width: '100%',
                    maxWidth: '668px',
                    '& h2, p' : {
                        textAlign: 'left'
                    }
                },
                '& h2' : {
                    marginTop: 0
                },
                 '& p:last-of-type' : {
                     marginBottom: 0
                 }
            },
            '&.aboutGridRight' : {
                color: 'rgb(24 53 69)',
                paddingLeft: '16px',
                paddingRight: '16px',
                display: 'flex',
                '& .animate__fadeInRight' : {
                    margin: 'auto'
                }, 
                '@media(min-width: 600px)' : {
                    paddingLeft: '32px',
                    paddingRight: '32px'
                }
            },
            '&.aboutGridLeft' : {
                display: 'flex',
                '& img' : {
                    margin: 'auto',
                    width: '100%'
                }
            },
            '&.aboutGridContact' : {
                '@media(max-width: 1279px)' : {
                    paddingTop: '3rem',
                    paddingBottom: '2rem'
                }
            },
            '&.aboutGridImage' : {
                '@media(max-width: 1279px)' : {
                    position: 'absolute',
                    height: '100%',
                    width: '100%',
                    zIndex: -1,
                    '& img' : {
                        width: 'auto !important',
                        height: 'auto',
                        maxHeight: '100%',
                        maxWidth: '100%',
                        opacity: '.3'
                    }
                }
            }
        }
    },
    sectionSlider : {
        position: 'relative',
        overflow: 'hidden',
        padding: '1rem 0 8rem',
        backgroundColor: '#f1f6fb',
        display: 'flex',
        '@media(min-width: 800px)' : {
            padding: '3rem 0 9rem',
        },
        '& .store-container' : {
            margin: '0 auto',
            color: 'rgb(24 53 69)',
            display: 'flex',
            flexFlow: 'column nowrap',
            zIndex: 1,
            '& a' : {
                textDecoration: 'none'
            },
            '& h2' : {
                margin: '0 auto 24px',
                '@media(min-width: 800px)' : {
                    margin: '0 auto 24px',                    
                }
            },
            '& p' : {
                textAlign: 'center',
                marginTop: 0,
                marginBottom: 0
            },
            '& h3' : {
                fontSize: '34px',
                textAlign: 'center',
                marginTop: '1.2rem',
                fontWeight: 'bold',
                color: 'red',
                marginBottom: '5rem',
                '@media(min-width: 800px)' : {
                    marginTop: 0                    
                }
            }
        }
    },
    storeTitle : {
        margin: '0 0 60px',
        textAlign: 'center'
    },
    sectionTestimonial : {
        overflow: 'hidden',
        backgroundColor: '#f1f6fb',
        paddingBottom: 0,
        paddingTop: 0,
        '& > .testimonial-grid' : {
            paddingBottom: 0,
            paddingTop: 0,
            '& > .aboutGridRight' : {
                paddingTop: '4rem',
                paddingBottom: '6rem',
                backgroundColor: 'white',
                '@media(max-width: 1279px)' : {
                    paddingTop: '3rem',
                    paddingBottom: '3rem',
                }
            }
        }
    },
    storeOverlay : {
        backgroundColor: 'rgba(24, 24, 24, 0.3)',
        position: 'absolute',
        bottom: 0,
        top: 0,
        left: 0,
        right: 0,
        zIndex: 0
    },
    blobGrid : {
        display: 'flex',
        '& img' : {
            margin: 'auto',
            maxWidth: '80%'
        }
    },
    waveySection : {
        backgroundImage: `url(${WaveyLines})`,
        backgroundSize: '100% 100%',
        padding: '3rem 0 6rem'
    },
    topicQuote : {
        fontStyle: 'italic',
        fontSize: '28px',
        textAlign: 'left !important',
        margin: 'auto 0 auto auto',
        '@media(max-width: 1279px)' : {
            fontSize: '24px'
        }
    },
    contactBox : {
        display: 'flex',
        flexFlow: 'row nowrap'
    },
    grayBorderBottom: {
        backgroundImage: `url(${GrayBorderBottom})`,
        width: '100%',
        left: '0',
        bottom: '0',
        height: '97px',
        backgroundSize: '100% 100%',
        zIndex: '1',
        marginTop: '-56px',
        position: 'relative',
        '@media(max-width: 768px)' : {
            backgroundSize: 'cover',
        }
    },
    grayBorderTop: {
        backgroundImage: `url(${GrayBorderTop})`,
        width: '100%',
        marginTop: '-33px',
        left: '0',
        top: '0',
        height: '97px',
        backgroundSize: 'cover',
        zIndex: '1'
    },
    testimonialImage : {
        backgroundImage: `url(${SleepingPerson})`,
        backgroundSize: 'cover',
        backgroundPosition: 'right',
        '@media(max-width: 1279px)' : {
            minHeight: '200px',
            order: '2'
        }
    },
    animatedBox : {
        width: '100%',
        display: 'flex'
    },
    contactContainer : {
        '& .aboutGridImage' : {
            '@media(max-width: 1279px)' : {
                display: 'none !important'
            }
        }
    },
    testimonialTxt : {
        display: 'flex'
    }
})

export default connect(MapStateToProps, MapDispatchToProps)(HomePage)
