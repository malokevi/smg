import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { Typography, Accordion, AccordionSummary, AccordionDetails, AppBar, Tabs, Tab } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import CaretWhite from '../../../assets/images/icons/caret-real-white.png'

const MobileNav = (props) => {
    const {expandNav, hasHome} = props
    const classes = useStyles()

    const [value, setValue] = React.useState(0)

    const handleChange = (event, newValue) => {
      setValue(newValue)
    }

    const navToFacts = (elem) => {
        const ids = {
            'about' : 1,
            'testing' : 9,
            'adp' : 19
        }
        
        const id = `about-${ids[elem]}`
        const scrollElem = document.getElementById(id)
        if(scrollElem !== null) {
            window.scroll({top: scrollElem.offsetTop - 120, left: 0, behavior: 'smooth' })
        }
    }

    return (
        <div className={classes.mobileNav}>
            <Accordion className={classes.expansionPanel} square expanded={expandNav}>
                <AccordionSummary className={classes.hideSummary}>
                    <Typography>Collapsible Group Item #1</Typography>
                </AccordionSummary>
                <AccordionDetails className={classes.expansionRoot}>
                    <div className={classes.root}>
                        <AppBar className={classes.appBar} position="static" color="default">
                            <Tabs
                                value={value}
                                onChange={handleChange}
                                textColor="inherit"
                                variant="scrollable"
                                scrollButtons="auto"
                                aria-label="scrollable auto tabs"
                                TabIndicatorProps={{
                                    style: {
                                      visibility: 'hidden'
                                    }
                                }}
                            >
                    		    {hasHome == true ? <Link href="/"><Tab label="Home" /></Link> : false}
                                <div>
                                    <ul className={classes.navItem}>
                                        <li>
		                                <Link to="/facts"><Tab label="The Facts" /></Link>
		                                <ul className={`${classes.subNav} subNav--class`}>
		                                    <li><Link to="/facts#about"><Tab label="About Sleep Apnea" onClick={() => navToFacts('about')} /></Link></li>
		                                    <li><Link to="/facts#testing"><Tab onClick={() => navToFacts('testing')} label="Testing and Diagnosis" /></Link></li>
		                                    <li><Link to="/facts#adp"><Tab onClick={() => navToFacts('adp')} label="Assisted Devices Program" /></Link></li>
		                                </ul>
                                        </li>
                                    </ul>
                                </div>
                                <Link to="/testimonials"><Tab label="Testimonials" /></Link>
                                <Link to="/newsletters"><Tab label="Newsletter" /></Link>
                                <Link to="/contact"><Tab label="Contact Us" /></Link>
                                <Link to="/shop"><Tab label="Shop Online"></Tab></Link>
                            </Tabs>
                        </AppBar>
                    </div>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}

const MapStateToProps = (state) => {
    return { 
        expandNav : state.options.toggleMobileNav
    }
}

const useStyles = makeStyles({
    root: {
        marginRight: 0,
        paddingLeft: 0,
        maxWidth: '100%',
        width: '100%',
        display: 'flex',
        "& .MuiTab-root" : {
            backgroundColor: "transparent",
            minWidth: "0",
            color: "white", 
            opacity: 1,
            transition: "all .25s ease-in-out",
            marginLeft: '18px',
            fontFamily: 'Montserrat, sans-serif',
            fontSize: '20px',
            textTransform: 'capitalize',
            textAlign: 'left !important',
            textDecoration: 'none',
            "& :hover" : {
                color: 'white'
            },
            '& .MuiTabs-root' : {
                overflow: 'visible'
            }
        },
        '& .MuiAppBar-root' : {
            marginTop: 0,
            '& ul > li > ul' : {
                display: 'block',
                position: 'relative',
                marginLeft: 0,
                backgroundColor: 'transparent',
                '& li' : {
                    paddingLeft: 0,
                    position: 'relative',
                    '& a' : {
                            fontSize: '16px !important', 
                            paddingLeft: '16px !important',
                        '&:before' : {
                            content: '""',
                            backgroundSize: 'contain',
                            backgroundRepeat: 'no-repeat',
                            width: '8px',
                            height: '14px',
                            position: 'absolute',
                            left: '34px',
                            top: '15px',
                            backgroundImage: `url(${CaretWhite})`
                        },
                        '&:hover' : {
                            backgroundColor : "#315275",
                            'span' : {
                                color: 'white !important',
                            },
                        },
                        '& span' : {
                            color: 'white',
                        }
                    }
                }
            },
            '& .MuiTab-root' : {
                textAlign: 'left',
                marginLeft: 0,
                marginRight: 'auto',
                minHeight: 0,
                fontWeight: 400,
                fontSize: '20px',
                lineHeight: '1.4',
                marginBottom: 0,
                padding: '12px 24px',
                width: '100%',
                maxWidth: '100%',
                '&:hover' : {
                    backgroundColor : "#315275",
                    '& span' : {
                        color: 'white'
                    }
                },
                '& .MuiTab-wrapper' : {
                    alignItems: 'start'
                }
            },
            '& .MuiTabs-flexContainer' : {
                flexFlow: 'column nowrap',
                '& a' : {
                    textDecoration: 'none'
                }
            }
        }
    },
    '.MuiTabs-root' : {
        margin: 'auto',
        '& .MuiTabScrollButton-root' : {
            display: 'none'
        }
    },
    appBar : {
        background: 'transparent',
        boxShadow: 'none', 
        marginTop: 'auto'
    },
    navItem : {
        listStyle: 'none',
        position: 'relative',
        paddingLeft: 0,
        marginTop: 0,
        marginBottom: 0,
        '&:hover' : {
            '& .makeStyles-subNav-12' : {
                display: 'block'
            }
        },
        '& a:hover span' : {
            color: 'white !important'
        },
        '& a' : {
            textDecoration: 'none'
        }
    },
    subNav : {
        listStyle: 'none',
        paddingLeft: 0,
        marginLeft: '30px',
        position: 'absolute',
        top: '96%',
        left: 0,
        display: 'none',
        backgroundColor: '#003c79',
        minWidth: '240px',
        zIndex: 2,
        '& li' : {
            width: '100%',
            marginLeft: '0 !important',
            textAlign: 'left',
            fontSize: '16px !important',
            '& button' : {
                paddingLeft: '38px !important'
            },
            '&:hover' : {
                backgroundColor : "#315275",
                color: 'white !important',
                '& span' : {
                    color: 'white !important', 
                }
            },
            '& span' : {
                color: 'white',     
                display: 'block',
                textAlign: 'left',
                fontSize: '16px !important'           
            }
        }
    },
    mobileNav : {
        '@media(min-width: 992px)':  {
            display: 'none'
        }
    },
    hideSummary : {
        display: 'none'
    },
    expansionPanel : {
        backgroundColor : '#203245'
    },
    expansionRoot : {
        padding: 0
    },
    indicator : {
        visibility: 'hidden'
    }
})

export default connect(MapStateToProps)(MobileNav)