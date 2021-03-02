import React from 'react'
import { Container, Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

import ScrollAnimation from 'react-animate-on-scroll'

import BorderBottom from '../../../assets/images/backgrounds/gray-border-bottom.png'

const Hero = (props) => {
    const classes = useStyles()
    const {title, subtitle, alignBG, image, styles, background} = props

    return (
        <Box component="section" m={0} p={0} className={`${classes.hero} ${styles.heroAdjustment}`}>
            <div className={`${classes.overlay}`} id="overlay-select">

                <div style={{backgroundImage : `url(${background}`}} className={`${classes.heroSwiper} ${typeof styles !== 'undefined' ? styles.heroSwiperTwo : ''} hero-swiper`}>
                    <Container maxWidth="lg" className={classes.flex}>
                        <img alt={``} className={`woman-cpap`} src={image} />
                        <ScrollAnimation delay={500} className="hero-text" animateIn="animate__fadeInUp">
                            <h1>{ title }</h1>
                            {typeof subtitle !== 'undefined' ? <p>{subtitle}</p> : ''}
                        </ScrollAnimation>
                    </Container>
                </div>
                {typeof styles.heroBorder != 'undefined' ? <div className={`${classes.borderBottom} ${typeof styles !== 'undefined' ? styles.heroBorder : ""}`}></div> : ''}
            </div>
        </Box>
    )
}

const useStyles = makeStyles({
    hero: {
        backgroundColor: 'white',
        height: '500px',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        padding: '3rem 0',
        maxHeight: '546px',
        minHeight: '400px',
        maxHeight: 'calc(100vh - 6rem)',
        transition: 'height .25s ease-in-out',
        '@media(max-width: 768px)' : {
            right: 'auto !important',
            left: '0 !important',
            maxWidth: 'none !important',
            width: 'auto',
            height: 'auto !important',
        },
        '@media(min-width: 991px)' : {
            height: '642px',
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
        '@media(min-width: 992px)' : {
            paddingTop: '142px',
        },
        '& .woman-cpap' : {
            bottom: 0,
            position: 'absolute',
            display: 'none',
            transition: 'all .25s ease-in-out',
            height: '100vh',
            maxHeight: '681px',
            right: '-136px',
            bottom: '-16px',
            '@media(min-width: 1240px)' : {
                maxHeight: '526px',
                display: 'block',
            },
            '@media(min-width: 1370px)' : {
                maxHeight: '595px',
            },
            '@media(min-width: 1600px)' : {
                maxHeight: '695px',
            },
            '@media(min-width: 1800px)' : {
                maxHeight: '720px',
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
            zIndex: 1,
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
        backgroundSize: 'cover',
        backgroundPosition: '50%',
        '& .swiper-slide' : {
            overflow: 'hidden'
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
    }
})

export default Hero