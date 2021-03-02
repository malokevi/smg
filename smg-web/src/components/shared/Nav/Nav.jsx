import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { makeStyles } from '@material-ui/styles'
import { AppBar, Tabs, Tab } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';

import Caret from '../../../assets/images/icons/caret-white.png'
import {toggleMobileNavAction, toggleShopNavAction} from '../../../store/actions/optionActions'

const Nav = (props) => {
    const {toggleMobileNav, hasHome, toggleShopNav, storeMenuToggle} = props
    const classes = useStyles()

    const [value, setValue] = React.useState(0)

    useEffect(() => {
        toggleMobileNav(false)
    }, [])

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

    const ShopOnlineBtn = () => {
        const isNewStore = process.env.REACT_APP_IS_NEW_STORE;

        if(isNewStore === true) {
            return (
                <Tab className={`${classes.storeToggle} ${storeMenuToggle === true ? 'active' : ''}`} onClick={() => toggleShopNav()} label="Shop Online"></Tab>
            )
        } else {
            return (
                <Link to="/store"><Tab label="Shop Online" /></Link>
            )
        }
    }

    return (
        <div className={classes.root}>
            <AppBar className={classes.appBar} position="static" color="default">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    textColor="inherit"
                    variant="scrollable"
                    scrollButtons="auto"
                    aria-label="scrollable auto tabs"
                    className={classes.tabsRoot}
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
                    <p className={`${classes.divider} divider`}>|</p>
                    { <ShopOnlineBtn /> }
                </Tabs>
                <MenuIcon className={classes.mobileToggle} onClick={() => {
                    toggleMobileNav()
                }} />
            </AppBar>
        </div>
    )
}

const MapStateToProps = (state) => ({
    isAuthed : state.auth.isAuthenticated,
    storeMenuToggle : state.options.toggleShopNav
})

const MapDispatchToProps = (dispatch) => {
    return {
        toggleMobileNav : (val) => {
            dispatch(toggleMobileNavAction(val))
        },
        toggleShopNav : () => {
            dispatch(toggleShopNavAction())
        }
    }
}

const useStyles = makeStyles({
    root: {
        marginLeft: "auto",
        display: 'flex',
        flexFlow: 'column nowrap',
        '& .userMenu' : {
            marginLeft: 'auto'
        },
        "& .MuiTab-root" : {
            backgroundColor: "transparent",
            minWidth: "0",
            color: "rgb(24 53 69)", 
            opacity: 1,
            transition: "all .25s ease-in-out",
            marginLeft: '18px',
            fontFamily: 'Montserrat, sans-serif',
            fontSize: '18px',
            textTransform: 'capitalize',
            "& :hover" : {
                color: '#84c1ff'
            },
            '& .MuiTabs-root' : {
                overflow: 'visible'
            }
        }
    },
    navBar: {
        display: "flex",
        flexFlow: "row nowrap",
        marginLeft: "auto",
        alignItems: "center",
        "& button" : {
            marginLeft: "1rem",
            "& span" : {
                marginLeft: "1rem"
            }
        }
    },
    '.MuiTabs-root' : {
        margin: 'auto'
    },
    appBar : {
        background: 'transparent',
        boxShadow: 'none', 
        marginTop: 'auto',
        marginBottom: 'auto',
        '@media(min-width: 992px)' : {
            marginBottom: 0
        }
    },
    navItem : {
        listStyle: 'none',
        position: 'relative',
        paddingLeft: 0,
        marginTop: 0,
        marginBottom: 0,
        transition: "all .25s ease-in-out",
        '&:hover' : {
            '& .subNav--class' : {
                display: 'block'
            }
        },
        '& a:hover span' : {
            color: '#84c1ff !important'
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
            '& button' : {
                marginLeft: '0 !important',
                width: '100%',
                paddingLeft: '16px'
            },
            '&:hover' : {
                backgroundColor: '#0051a5',
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
    tabsRoot : {
        overflowX: 'visible',
        overflow: 'visible',
        display: 'none',
        '@media(max-width: 799px)' : {
            margin: 'auto'
        },
        '@media(min-width: 992px)' : {
            display: 'block'
        },
        '& .MuiTabs-scrollable' : {
            overflowX: 'visible'
        },
        '& a' : {
            textDecoration: 'none',
            '@media(max-width: 799px)' : {
                margin: 'auto'
            },
        }
    },
    mobileToggle : {
        display: 'block',
        fontSize: '50px',
        color: '#297ac0',
        margin: 'auto 0 auto auto',
        cursor: 'pointer',
        '@media(min-width: 992px)' : {
            display: 'none'
        }
    },
    divider : {
        margin: '0 0 0 18px',
        alignItems: 'center',
        color: 'rgb(24 53 69)',
        display: 'flex'
    },
    storeToggle : {
        '&:after' : {
            content: '""',
            backgroundImage: `url(${Caret})`,
            width: '12px',
            marginLeft: '12px',
            height: '16px',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            transition: 'all .25s ease-in-out'
        },
        '&.active' : {
            '&:after' : {
                transform: 'rotate(90deg)'
            }
        }
    }
})

export default connect(MapStateToProps, MapDispatchToProps)(Nav)