import React from 'react'

import CalloutBody from './calloutBody'

import BedIcon from '../../assets/images/icons/bed-callout-white.png'
import ContactIcon from '../../assets/images/icons/contact-callout-white.png'
import ShopIcon from '../../assets/images/icons/cart-callout-white.png'
import BorderBottomTwo from '../../assets/images/backgrounds/blue-border-bottom-two.png'

import { makeStyles } from '@material-ui/core/styles'
import { Container, Box, Grid } from '@material-ui/core'

const Callouts = () => {
    const classes = useStyles()

    return (
        <>
            <div id="callouts__anchor"></div>
            <Box component="section" m={0} className={`${classes.callouts} callout--section`}>
                <Container maxWidth="lg" justify="center">
                    <Grid container spacing={3}>
                        {calloutData.map((c, index) => (
                            <Grid className={c.elemClass} xs={12} md={4} lg={4} key={index} item>
                                <CalloutBody index={index} {...c} />
                            </Grid>
                        ))}
                    </Grid>
                </Container>
                <div className={classes.borderBottom}></div>
            </Box>
        </>
    )
}

const calloutData = [
    {
        text: "Learn about SLEEP APNEA",
        icon: BedIcon,
        buttonText: 'Learn More',
        elemClass: 'callout--first',
        path: '/facts'
    },
    {
        text: "visit us IN STORE",
        icon: ContactIcon,
        buttonText: 'Find Locations',
        elemClass: 'callout--second',
        path: '/contact'
    },
    {
        text: "Visit our ONLINE STORE",
        icon: ShopIcon,
        buttonText: 'Shop Now',
        elemClass: 'callout--last',
        path: '/shop'
    }
]

const useStyles = makeStyles({
    callouts : {
        position: 'relative',
        display: 'flex',
        backgroundColor: '#6697c6',
        padding: '4rem 0 9rem',
        '@media(max-width: 959px)' : {
            padding: '4rem 0 8rem',
        },
        '& .callout--last' : {
            '@media(max-width: 959px)' : {
                maxWidth: '100%',
                flexBasis: '100%',
                '& .callout-2' : {
                    margin: '3rem auto 0'
                }
            }
        },
        '& .callout--first' : {
            '@media(max-width: 959px) and (min-width: 700px)' : {
                maxWidth: '50%',
                flexBasis: '50%'
            }
        },
        '& .callout--second' : {
            '@media(max-width: 959px) and (min-width: 700px)' : {
                maxWidth: '50%',
                flexBasis: '50%'
            },
            '@media(max-width: 699px)' : {
                '& .callout-1' : {
                    margin: '3rem auto 0'
                }
            }
        },
        '@media(min-width: 960px) and (max-width: 1279px)' : {
            '& .callout--first div > div' : {
                marginRight: 0
            },
            '& .callout--second div > div' : {
                marginLeft: 0
            }
        }
    },
    borderBottom: {
        backgroundImage: `url(${BorderBottomTwo})`,
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

export default Callouts