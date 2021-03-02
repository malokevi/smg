import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import { Box, Grid } from '@material-ui/core'
import Swiper from 'swiper'
import 'swiper/swiper-bundle.min.css'

import {toggleMobileNavAction} from '../store/actions/optionActions'

import testimonialData from '../assets/data/testimonials.js'
import SleepingPerson from '../assets/images/backgrounds/guy-sleeping.jpg'
import BorderBottom from '../assets/images/backgrounds/blue-border-bottom-invert.png'

import Hero from './shared/Hero/Hero'
import Testimonial from './shared/Testimonial'
import TestimonialVec from '../assets/images/backgrounds/testimonials-vector.svg'

const Testimonials = (props) => {
    const classes = useStyles()
    const heroStyle = heroStyles()
    const { toggleMobileNav } = props

    useEffect(() => {
        toggleMobileNav(false)
    }, [toggleMobileNav])

    useEffect(() => {
        window.scroll({top: 0, left: 0 })

        const testimonialSwiper = new Swiper('.testimonial-swiper', {
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

    return (
        <>
            <Hero styles={heroStyle} image={TestimonialVec} title="Testimonials" subtitle="Don't take it from us! See what some of our clients have to say about SMG." alignBG="left" />
            <div className={`${classes.borderBottom}`}></div>
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

const useStyles = makeStyles((theme) => ({
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
                paddingBottom: '7rem',
                backgroundColor: 'white',
                '@media(max-width: 991px)' : {
                    paddingTop: '5rem',
                    paddingBottom: '4rem'
                }
            },
            '& > .aboutGridLeft' : {
                minHeight: '250px',
                '@media(max-width: 1279px)' : {
                    order: 2
                }
            }
        }
    },
    about : {
        textAlign: 'left',
        backgroundSize: 'cover',
        padding: '1rem 0',
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
                color: 'rgb(24 53 69)',
                paddingLeft: '16px',
                paddingRight: '16px',
                display: 'flex',
                '& .animate__fadeInUp' : {
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
            }
        }
    },
    testimonialImage : {
        backgroundImage: `url(${SleepingPerson})`,
        backgroundSize: 'cover',
        backgroundPosition: 'right'
    },
    borderBottom: {
        backgroundImage: `url(${BorderBottom})`,
        width: '100%',
        marginBottom: '-35px',
        height: '97px',
        backgroundSize: '100% 100%',
        position: 'relative',
        zIndex: 2,
        '@media(max-width: 768px)' : {
            backgroundSize: 'cover',
        }
    }
}));
  
const heroStyles = makeStyles({
    heroSwiperTwo : {
        backgroundColor: '#30587b',
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
            width: '1200px',
            right: '-136px !important',
            bottom: '120px !important',
            opacity: '.3',
            display: 'block !important',
            maxWidth: 'none',
            height: 'auto !important',
            '@media(max-width: 750px)' : {
                right: 'auto !important',
                left: '-100px !important',
                maxWidth: 'none !important',
                width: '700px',              
                bottom: '100px !important'  
            },
            '@media(max-width: 991px) and (min-width: 771px)' : {
                width: '800px',
                right: '-80px !important',
                bottom: '130px !important'
            },
            '@media(min-width: 1240px)' : {
                width: '1000px',
                right: '-300px !important',
                bottom: '150px !important',
                opacity: '1 !important'
            },
            '@media(min-width: 1370px) and (max-width: 1599px)' : {
                width: '1000px',
                right: '-240px !important',
                bottom: '150px !important',
            },
            '@media(min-width: 1600px)' : {
                width: '1100px'
            },
            '@media(min-width: 1800px)' : {
                width: '1200px !important',
                bottom: '120px !important',
                right: '-100px'
            }
        }
    },
    heroAdjustment : {
        height: '320px',
        minHeight: '520px',
        '@media(max-width:991px)' : {
            minHeight: '382px',
        },
        '@media(max-width: 768px)' : {
            minHeight: '280px'
        },
        '& .hero-text' : {
            margin: 'auto auto 108px 0',
            '@media(max-width: 991px)' : {
                margin: '200px auto 108px 0'
            },
            '@media(max-width: 768px)' : {
                margin: '136px auto 108px 0'
            }
        },
        '& img.woman-cpap' : {
            bottom: '28px !important',
            right: '-129px !important',
            width: '500px',
            '@media(max-width: 768px)' : {
                left: 'auto !important',
            },
            '@media(min-width: 769px) and (max-width: 991px)' : {
                bottom: '5px !important',
                right: '-321px !important',
                width: '984px',
            },
            '@media(min-width: 992px) and (max-width: 1199px)' : {
                bottom: '40px !important',
                right: '-321px !important',
                width: '984px',
            },
            '@media(min-width: 1200px)' : {
                width: '1131px !important',
                right: '-340px !important',
                bottom: '12px !important'
            }
        }
    }
});

export default connect(false, MapDispatchToProps)(Testimonials)
