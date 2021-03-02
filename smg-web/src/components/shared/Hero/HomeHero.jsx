import React from 'react'
import { Link } from 'react-router-dom'

import { Container, Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

import CaretWhite from '../../../assets/images/icons/caret-white.png'
import HeroGirl from '../../../assets/images/backgrounds/girl-pillow.png'
import HeroBG from '../../../assets/images/backgrounds/home-hero-bg.jpg'

import ScrollAnimation from 'react-animate-on-scroll'

const scrollDown = () => {
    const scrollElem = document.getElementById('callouts__anchor')

    if(scrollElem !== null) {
        var width = window.innerWidth
        if(width >= 992) { 
            window.scroll({top: scrollElem.offsetTop - 110, left: 0, behavior: 'smooth' })
        } else {
            window.scroll({top: scrollElem.offsetTop - 80, left: 0, behavior: 'smooth' })
        }
    }
}

const HomeHero = () => {
    const classes = useStyles()

    return (
        <Box component="section" m={0} p={0} className={classes.hero}>
            <div className={`${classes.overlay}`} id="overlay-select">
                <Container maxWidth="lg" className={classes.flex}>
                    <img alt={``} className="woman-cpap" src={HeroGirl} />
                    <ScrollAnimation delay={500} className="hero-text" animateIn="animate__fadeInUp">
                        <h1>Providing Sleep Apnea Therapy Equipment For Over 15 Years</h1>
                        <p>At Sleep Management Group we have been working closely with our clients and their physicians, partnering to provide the support needed to achieve positive outcomes. SMG is focused on creating success stories.</p>
                        <Link className={classes.storeBtn} to="/store">
                            Visit The Store <img alt={`click to visit the store`} src={CaretWhite} />
                        </Link>
                    </ScrollAnimation>
                </Container>
            </div>
            <div onClick={() => scrollDown()} className="arrow__wrapper">
                <a href="#service">	
                    <div className="arrow">
                        <ul>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                </a>
            </div>
        </Box>
    )
}

const useStyles = makeStyles({
    hero: {
        backgroundImage: `url(${HeroBG})`,
        height: '100vh',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        padding: '3rem 0',
        maxHeight: '546px',
        minHeight: '400px',
        '@media(min-width: 767px)' : {
            maxHeight: 'calc(100vh - 6rem)',
        },
        '@media(min-width: 992px)' : {
            height: '100vh',
        }
    },
    flex : {
        display: 'flex',
        height: '100%'
    },
    overlay: {
        backgroundColor: 'rgba(24, 24, 24, 0.4)',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        paddingTop: '76px',
        '@media(min-width: 980px)' : {
            paddingTop: '130px',
        },
        '& .woman-cpap' : {
            bottom: 0,
            position: 'absolute',
            display: 'none',
            transition: 'all .25s ease-in-out',
            height: '100vh',
            '@media(min-width: 1240px)' : {
                maxHeight: '54vh',
                display: 'block',
                right: '1vw',
            },
            '@media(min-width: 1370px)' : {
                maxHeight: '65vh',
                right: '1.5vw',
            },
            '@media(min-width: 1600px)' : {
                maxHeight: '70vh',
                right: '4vw',
            },
            '@media(min-width: 1800px)' : {
                maxHeight: '70vh',
                right: '6vw',
            }
        },
        '& .hero-text' : {
            margin: 'auto 0',
            maxWidth: '700px',
            color: "white",
            display: 'flex',
            flexFlow: 'column nowrap',
            width: '100%',
            '& h1' : {
                margin: 0
            },
            '& p' : {
                marginBottom: 0,
                fontSize: "16px",
                maxWidth: '100%',
                minWidth: 0,
                '@media(min-width: 550px)' : {
                    fontSize: "18px",
                },
                '@media(min-width: 980px)' : {
                    fontSize: '24px'
                },
                '@media(min-width: 992px)' : {
                    minWidth: "110%",                    
                }
            }
        }
    },
    storeBtn : {
        fontSize: '22px',
        fontWeight: 'bold',
        color: 'white',
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
    }
})

export default HomeHero
