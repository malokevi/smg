import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import Hero from './shared/Hero/Hero'
import BorderBottom from '../assets/images/backgrounds/gray-border-bottom.png'
import NotFoundVector from '../assets/images/backgrounds/404-vec.svg'

const Error404 = () => {
    const heroStyle = heroStyles()

    return (
        <Hero styles={heroStyle} image={NotFoundVector} title="404 - Page Not Found" subtitle="Took a left turn at Albuquerque? Use our site navitagion to find your home!" />
    )
}

const heroStyles = makeStyles((theme) => ({
    heroAdjustment : {
    },
    heroSwiperTwo : {
        backgroundColor: '#1970bb',
        position: 'relative',
        overflow: 'hidden',
        '& h1' : {
            color: 'white'
        },
        '& p' : {
            color: 'white'
        },
        '& img' : {
            maxHeight: '651px',
            maxWidth: '520px',
            right: '0 !important',
            top: '0 !important',
            left: 'auto !important',
            opacity: '.3',
            display: 'block !important',
            height: 'auto !important',
            bottom: 'auto',
            '@media(max-width: 670px)' : {
                right: '0 !important',
                maxWidth: '420px !important',
                width: 'auto',                
            },
            '@media(max-width: 991px)' : {
                maxHeight: '600px !important'
            },
            '@media(min-width: 1240px)' : {
                maxHeight: '502px',
                right: '40px !important',
                opacity: '1',
            },
            '@media(min-width: 1370px)' : {
                maxHeight: '519px',
                right: '200px !important'
            },
            '@media(min-width: 1600px)' : {
                maxHeight: '612px',
            },
            '@media(min-width: 1800px)' : {
                maxHeight: '602px !important',
                right: '300px !important'
            }
        }
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

export default Error404