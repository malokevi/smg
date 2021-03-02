import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import { Container, Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

import CaretWhite from '../../../assets/images/icons/caret-white.png'
import Cartoon from '../../../assets/images/backgrounds/sleep-cartoon.png'
import BorderBottom from '../../../assets/images/backgrounds/blue-border-bottom.png'
import PinkGirlBanner from '../../../assets/images/backgrounds/pink-girl-banner.jpg'


import Swiper from 'swiper'
import "swiper/swiper-bundle.min.css";

const HomeHero = () => {
    const classes = useStyles()

    useEffect(() => {
        window.scroll({top: 0, left: 0 })

        new Swiper('.hero-swiper', {
            autoplay: {
                delay: 6000
            },
            grabCursor: true,
            speed: 300,
            loop: true,
            pagination: {
              el: '.swiper-pagination-hero',
              clickable: true,
              type: 'bullets'
            },
        })
    }, [])

    return (
        <Box component="section" m={0} p={0} className={classes.hero}>
            <div className={`${classes.overlay}`} id="overlay-select">
                <div className={`${classes.heroSwiper} hero-swiper`}>
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <Container maxWidth="lg" className={classes.flex}>
                                <img alt={``} className="woman-cpap" src={Cartoon} />
                                <div delay={500} className="hero-text" animateIn="animate__fadeInUp">
                                    <h1>Providing Sleep Apnea Therapy Equipment For Over 15 Years</h1>
                                    <p>At Sleep Management Group we have been working closely with our clients and their physicians, partnering to provide the support needed to achieve positive outcomes. SMG is focused on creating success stories.</p>
                                    <Link className={classes.storeBtn} to="/store">
                                        Visit The Store <img alt={`click to visit the store`} src={CaretWhite} />
                                    </Link>
                                </div>
                            </Container>
                        </div>

                        <div className={`${classes.pinkGirlBanner} swiper-slide`}>
                            <Container maxWidth="lg" className={`${classes.flex}`}>
                                <div delay={500} className="hero-text" animateIn="animate__fadeInUp">
                                    <h1>Get The Sleep You've Been Dreaming Of</h1>
                                    <p>Stay informed on the latest information in the field of sleep medicine. We've got the facts!</p>
                                    <Link className={classes.storeBtn} to="/store">
                                        Visit The Store <img alt={`click to visit the store`} src={CaretWhite} />
                                    </Link>
                                </div>
                            </Container>
                        </div>
                    </div>
                    <div className={`swiper-pagination-hero ${classes.swiperPagination}`}></div>
                </div>
                <div className={classes.borderBottom}></div>
            </div>
        </Box>
    )
}

const useStyles = makeStyles({
    hero: {
        backgroundColor: 'white',
        height: '642px',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        padding: '3rem 0',
        maxHeight: '546px',
        minHeight: '400px',
        '@media(min-width: 767px)' : {
            maxHeight: 'calc(100vh - 6rem)',
        }
    },
    flex : {
        display: 'flex',
        height: '100%',
        overflow: 'hidden'
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        paddingTop: '76px',
        overflow: 'hidden',
        '@media(min-width: 980px)' : {
            paddingTop: '142px',
        },
        '& .woman-cpap' : {
            bottom: 0,
            position: 'absolute',
            transition: 'all .25s ease-in-out',
            height: '115%',
            zIndex: '-1',
            opacity: '.4',
            '@media(min-width: 1240px)' : {
                maxHeight: '649px',
                display: 'block',
                right: '-472px',
                opacity: '1'
            },
            '@media(min-width: 1370px)' : {
                maxHeight: '595px',
                right: '-320px',
            },
            '@media(min-width: 1600px)' : {
                maxHeight: '595px',
                right: '-220px',
            },
            '@media(min-width: 1800px)' : {
                maxHeight: '620px',
                right: '-123px',
            }
        },
        '& .hero-text' : {
            margin: 'auto auto auto 0',
            maxWidth: '600px',
            color: "rgb(24 53 69)",
            display: 'flex',
            flexFlow: 'column nowrap',
            width: '100%',
            paddingBottom: '24px',
            '& h1' : {
                margin: 0
            },
            '& p' : {
                marginBottom: 0,
                fontSize: "16px",
                maxWidth: '100%',
                fontWeight: 500,
                minWidth: 0,
                '@media(min-width: 550px)' : {
                    fontSize: "18px",
                },
                '@media(min-width: 980px)' : {
                    fontSize: '24px'
                },
                '@media(min-width: 992px)' : {
                    minWidth: "105%",                    
                }
            }
        }
    },
    storeBtn : {
        fontSize: '22px',
        fontWeight: 'bold',
        color: '#183545',
        cursor: 'pointer',
        marginTop: '1.5rem',
        textDecoration: 'none',
        display: "block",
        marginRight: "auto",
        '@media(min-width: 992px)' : {
            fontSize: '26px',
        },
        '& img' : {
            maxWidth: '10px',
            transition: 'all .25s ease-in-out'
        },
        '&:hover' : {
            '& img' : {
                transform: 'translateX(8px)'
            }
        }
    },
    heroSwiper : {
        height: '100%',
        '& .swiper-slide' : {
            overflow: 'hidden'
        },
        '& .swiper-pagination' : {
            fontSize: "30px",

            '& .swiper-pagination-bullet' : {
                background: 'white',
                width: "14px",
                height: "14px",
                opacity: ".4",
                '&.swiper-pagination-bullet-active' : {
                    opacity: "1",
                }   
            }
        }
    },
    borderBottom: {
        backgroundImage: `url(${BorderBottom})`,
        width: '100%',
        position: 'absolute',
        left: '0',
        bottom: '0',
        height: '97px',
        backgroundSize: '100% 100%',
        zIndex: '1',
        '@media(max-width: 768px)' : {
            backgroundSize: 'cover',
        }
    },
    pinkGirlBanner : {
        backgroundImage: `url(${PinkGirlBanner})`,
        backgroundSize: 'cover',
        backgroundPosition: '49%',
        '& .hero-text' : {
            color: 'rgb(24 53 69)'
        }
    },
    swiperPagination : {
        bottom: '100px'
    }
})

export default HomeHero
