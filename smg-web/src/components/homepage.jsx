import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import Swiper from 'swiper'
import "swiper/swiper-bundle.min.css";

import { Container, Box, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { Parallax } from 'react-parallax'
import ScrollAnimation from 'react-animate-on-scroll'

import Vendors from './shared/Vendors'
import ProductSlider from './shared/ProductSlider'
import {toggleMobileNavAction} from '../store/actions/optionActions'

import testimonialData from '../assets/data/testimonials.js'
import Testimonial from './shared/Testimonial'
import HomeHero from './shared/Hero/HomeHero'
import Callouts from './homepage/callouts'

import TestimonialsBG from '../assets/images/backgrounds/family-laughing.jpg'
import LeftColBG from '../assets/images/backgrounds/guy-sleeping.jpg'
import StoreBG from '../assets/images/backgrounds/store-bg.jpg'

const HomePage = (props) => {
    const classes = useStyles()
    const {toggleMobileNav, isAuthed} = props

    useEffect(() => {
        window.scroll({top: 0, left: 0 })

        new Swiper('.testimonial-swiper', {
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
    }, [])

    useEffect(() => {
        toggleMobileNav(false)
    }, [toggleMobileNav])

    return (
        <>
            <HomeHero />
            <Callouts />
            <Grid m={0} className={classes.about} container spacing={0}>
                <Grid className="aboutGrid aboutGridLeft" item xs={12} lg={6}>
                </Grid>
                <Grid className="aboutGrid aboutGridRight" item xs={12} lg={6}>
                    <ScrollAnimation animateIn="animate__fadeInUp">
                        <div className="about-smg">
                            <h2>About Sleep Management Group</h2>
                            <p>Sleep Management Group (SMG) was formed to meet the rapidly growing need for support and education in the field of Obstructive Sleep Apnea.</p>
                            <p>For over 15 years we have been working closely with our clients and their physicians, partnering to provide the support needed to achieve positive outcomes. SMG is focused on creating success stories.</p>
                            <p>Our staff are highly qualified Respiratory Therapists, CPAP Therapy Specialists and Nurses with many years of experience in sleep disorder treatment. Education, training, and on-going support services are a vital part of SMG's client-centered focus. As healthcare professionals we understand the unique needs of our clients and are dedicated to providing workable solutions. SMG works closely with clients to help you choose products and accessories that will optimize your comfort and compliance levels, and suit your individual needs.</p>
                        </div>
                    </ScrollAnimation>
                </Grid>
            </Grid>
            <Box component="section" m={0} className={classes.sectionSlider}>
                <div className={classes.storeOverlay}></div>
                <Container maxWidth="lg" justify="center" className="store-container">
                    <h2 className={classes.storeTitle}>Visit The Online Store</h2>
                    <p>Browse our inventory and make purchases online.</p>
                    <h3>Free Canadian Delivery Over $200!</h3>
                    <ProductSlider />
                </Container>
            </Box>
            <Vendors />
            <Parallax
            blur={0}
            bgImage={TestimonialsBG}
            bgImageAlt="the cat"
            strength={800}
            >
                <Box component="section" m={0} className={classes.sectionTestimonial}>
                    <div className="testimonial-swiper">
                        <div className="swiper-wrapper">
                            {testimonialData.map((t, index) => t.type === 'short' ?  <div key={`swipeslideindex-${index}`} className="swiper-slide"><Testimonial {...t} /></div> : false)}
                        </div>
                        <div className="swiper-button-next"></div>
                        <div className="swiper-button-prev"></div>
                    </div>
                </Box>
            </Parallax>
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
        '& .aboutGrid' : {
            paddingTop: '3rem',
            paddingBottom: '3rem',
            position: 'relative',
            overflow: 'hidden',
            '@media(min-width: 980px)' : {
                paddingTop: '5rem',
                paddingBottom: '5rem',
            },
            '& .about-smg' : {
                width: '90%',
                maxWidth: '800px',
                margin: 'auto',
                '& h2, p' : {
                    textAlign: 'center'
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
                backgroundColor: '#f1f6fb',
                color: 'rgb(24 53 69)',
                paddingLeft: '16px',
                paddingRight: '16px',
                '@media(min-width: 600px)' : {
                    paddingLeft: '32px',
                paddingRight: '32px'
                }
            },
            '&.aboutGridLeft' : {
                paddingTop: 0,
                paddingBottom: 0,
                backgroundImage: `url(${LeftColBG})`,
                backgroundSize: 'cover',
                backgroundPosition: '50%'
            }
        }
    },
    sectionSlider : {
        position: 'relative',
        overflow: 'hidden',
        padding: '3rem 0 2rem',
        height: '90vh',
        maxHeight: '650px',
        backgroundImage: `url(${StoreBG})`,
        backgroundSize: 'cover',
        backgroundPosition: 'bottom',
        display: 'flex',
        minHeight: '600px',
        '@media(min-width: 800px)' : {
            padding: '5rem 0 3rem',
        },
        '& .store-container' : {
            margin: '0 auto',
            color: 'white',
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
        backgroundColor: 'rgba(5, 47, 69, 0.67)'
    },
    storeOverlay : {
        backgroundColor: 'rgba(24, 24, 24, 0.3)',
        position: 'absolute',
        bottom: 0,
        top: 0,
        left: 0,
        right: 0,
        zIndex: 0
    }
})

export default connect(MapStateToProps, MapDispatchToProps)(HomePage)
