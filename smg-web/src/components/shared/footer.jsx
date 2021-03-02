import React from 'react'
import { Link } from 'react-router-dom'

import { Grid, Container, Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

import GrayBorderBottom from '../../assets/images/backgrounds/gray-border-bottom.png'
import CaretWhite from '../../assets/images/icons/caret-white.png'
import SmgLogo from '../../assets/images/smg_logo_foot_blue.png'
import FbIcon from '../../assets/images/icons/fbicon.png'

import Nav from './Nav/Nav'
import ReturnToTop from './Nav/returnToTop'

const Footer = () => {
    const classes = useStyles()

    return (
        <>
            <div className={classes.grayBorderBottom}></div>
            <Box component="footer" className={classes.root} id="smg-footer">
                <Container maxWidth="lg" className={`${classes.container} ${classes.containerTop} footer-container`}>
                    <Grid className={classes.footerLeft} xs={12} md={6} item>
                        <div className={classes.flexFoot}>
                            <div className={classes.locations}>
                                <h3>Our Locations</h3>
                                <Link to="/contact#oakville">
                                    Oakville
                                </Link>    
                                <Link to="/contact#burlington">
                                    Burlington
                                </Link>    
                                <Link to="/contact#london">
                                    London
                                </Link>    
                                <Link to="/contact#kitchener">
                                    Kitchener
                                </Link>    
                                <Link to="/contact#milton">
                                    Milton
                                </Link>    
                            </div>
                            <div className={classes.nav}>
                                <Nav hasHome={true} />
                            </div>    
                        </div>
                        <img alt={`SMG Logo`} className={classes.footerLogoMobile} src={SmgLogo} />
                    </Grid>
                    <Grid className={classes.footerRight} xs={12} md={6} item>
                        <img alt={`SMG Logo`} className={classes.footerLogo} src={SmgLogo} />
                        <a href={`https://www.facebook.com/SleepManagementGroup/`} className={classes.facebookLogo}>
                            <img alt={`Facebook Link`} src={FbIcon} />
                        </a>
                    </Grid>
                </Container>
                <Container maxWidth="lg" className={`${classes.container} ${classes.containerBtm} footer-container`}>
                    <Grid className={classes.footerBottom} xs={12} item>
                        <small className={classes.copyRight}>Copyright © Sleep Management Group, ALL RIGHTS RESERVED</small> 
                    </Grid>
                </Container>
            </Box>
            <ReturnToTop />
            <div className={classes.fixedBG}></div>
        </>
    )
}

const useStyles = makeStyles({
    root: {
        transition: 'all .25s ease-in-out',
        display: 'flex',
        flexFlow: 'column nowrap',
        backgroundColor: '#f1f6fb',
        zIndex: 1,
        '& .makeStyles-root-7' : {
            marginRight: 'auto', 
            marginLeft: 0
        },
        '& .subNav--class li' : {
            backgroundColor: 'transparent !important',

            '&:hover' : {
                '& span' : {
                    color: '#84c1ff !important'
                }
            }
        }
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
    container: {
        display: "flex",
        flexFlow: "column nowrap",
        paddingTop: "3rem",
        paddingBottom: "3rem",
        borderBottom: 'none',
        zIndex: 1,
        '@media(min-width: 800px)' : {
            flexFlow: "row nowrap"
        }
    },
    locations : {
        display: 'flex',
        flexFlow: 'column nowrap',
        order: 2,
        marginTop: '2rem',
        '@media(min-width: 800px)' : {
            order: 1,
            marginTop: 0
        },
        '& a' : {
            textDecoration: 'none',
            color: 'rgb(24 53 69)',
            opacity: 1,
            fontSize: '20px',
            minWidth: 0,
            fontFamily: 'Montserrat, sans-serif',
            marginBottom: '8px',
            alignSelf: 'center',
            '@media(min-width: 800px)' : {
                alignSelf: 'start',
            },
            '&:hover' : {
                color: '#84c1ff'
            }
        },
        '& h3' : {
            marginTop: 0,
            fontSize: '24px',
            color: 'rgb(24 53 69)',
            marginBottom: '12px',
            whiteSpace: 'nowrap',
            textAlign: 'center',
            '@media(min-width: 800px)' : {
                textAlign: 'left'
            }
        }
    },
    footerRight : {
        display: 'flex',
        flexFlow: 'column nowrap',
        '& .MuiTabs-flexContainer' : {
            flexFlow: 'column nowrap'
        }
    },
    facebookLogo : {
        margin: '2.4rem auto 0',
        transition: 'all .25s ease-in-out',
        cursor: 'pointer',
        '@media(min-width: 800px)' : {
            margin: 'auto 0 0 auto'
        },
        '&:hover' : {
            opacity: .7
        },
        '& img' : {
            maxWidth: '55px'
        }        
    },
    footerLeft : {
        display: 'flex',
        flexFlow: 'column nowrap',
        '@media(min-width: )' : {

        },
        '& .MuiAppBar-root' : {
            marginTop: 0,
            '& ul > li > ul' : {
                display: 'block',
                position: 'relative',
                marginLeft: 0,
                backgroundColor: 'transparent',
                '& li' : {
                    paddingLeft: '30px',
                    position: 'relative',
                    '&:before' : {
                        content: '""',
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat',
                        width: '8px',
                        height: '14px',
                        position: 'absolute',
                        left: '15px',
                        top: '4px',
                        backgroundImage: `url(${CaretWhite})`
                    },
                    '& a' : {
                        backgroundColor: 'transparent !important',
                        fontSize: '16px !important',
                        '&:hover span' : {
                            color: '#84c1ff !important',
                        },
                        '& span' : {
                            color: 'rgb(24 53 69)',
                        }
                    }
                }
            },
            '& .MuiTab-root' : {
                textAlign: 'left',
                marginRight: 'auto',
                padding: 0,
                minHeight: 0,
                fontWeight: 400,
                fontSize: '20px',
                lineHeight: '1.4',
                marginBottom: '8px',
                maxWidth: '100%',
                margin: 'auto',
                transition: 'all .25s ease-in-out',
                '& .MuiTab-wrapper' : {
                    alignItems: 'start'
                },
                '@media(min-width: 800px)' : {
                    maxWidth: '264px',
                    marginLeft: 0
                }
            },
            '& .MuiTabs-flexContainer' : {
                flexFlow: 'column nowrap',
                '& > div' : {
                    '@media(max-width: 799px)' : {
                        margin: 'auto',
                        '& li' : {
                            padding: 0,
                            textAlign: 'center',
                            '& a, span' : {
                                textAlign: 'center'
                            },
                            '& ul > li a span' : {
                                fontSize: '14px'
                            },
                            '& :before' : {
                                display: 'none'
                            }
                        }
                    }
                }
            }
        }
    },
    nav : {
        order: 1,
        '& svg' : {
            display: 'none'
        },
        '& .MuiTabs-root' : {
            display: 'block',
            '& .MuiTabs-scroller' : {
                '@media(max-width: 799px)' : {
                    width: '100%'
                }
            }
        },
        '@media(min-width: 800px)' : {
            order: 2,
            marginLeft: '120px',
        },
        '& .makeStyles-divider-14' : {
            display: 'none'
        },
        '& .makeStyles-storeToggle-15:after' : {
            display: 'none'
        }
    },
    footerLogo : {
        maxWidth: '167px',
        alignSelf: 'center',
        marginLeft: 'auto',
        marginBottom: 'auto',
        display: 'none',
        '@media(min-width: 992px)' : {
            maxWidth: '240px'
        },
        '@media(min-width: 800px)' : {
            display: 'block'
        }
    },
    footerLogoMobile : {
        display: 'block',
        alignSelf: 'center',
        maxWidth: '167px',
        marginTop: '2rem',
        '@media(min-width: 800px)' : {
            display: 'none'
        }
    },
    footerBottom : {
        textAlign: 'center',
        "@media(min-width: 800px)" : {
            textAlign: 'left',
            marginTop: '2rem',
        }
    },
    copyRight : {
        color: '#183545',
        opacity: '.5',
        fontSize: '14px',
        marginRight: 'auto',
        marginTop: '2rem',
        width: '100%',
        textAlign: 'center',
        "@media(min-width: 800px)" : {
            textAlign: 'left',
        }
    },
    flexFoot : {
        display: 'flex',
        flexFlow: 'column nowrap',
        zIndex: 1,
        '@media(min-width: 800px)' : {
            flexFlow: 'row nowrap'
        },
        '& .divider' : {
            display: 'none'
        }
    },
    fixedBG : {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'white',
        zIndex: -2,
        backgroundSize: 'cover'
    },
    containerBtm : {
        paddingTop: 0
    },
    containerTop : {
        paddingBottom: '2rem'
    }
})

export default Footer