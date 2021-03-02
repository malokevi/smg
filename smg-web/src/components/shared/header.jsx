import React, {useEffect} from 'react'
import { Container, Box } from '@material-ui/core/'
import { makeStyles } from '@material-ui/styles'
import { Link } from 'react-router-dom'
import Logo from '../../assets/images/smg_logo_foot_blue.png'

import StoreMenu from '../shop/StoreMenu'
import MobileNav from './Nav/mobileNav'
import Nav from './Nav/Nav'

const Header = () => {
    const classes = useStyles()
    var lastScrollTop = 0;
    const isNewStore = process.env.REACT_APP_IS_NEW_STORE;

    useEffect(() => {
        resizeHeaderOnScroll()
        window.addEventListener("scroll", () => {
            hideHeaderOnScroll()
            resizeHeaderOnScroll()
        }, false)
    }, [])

    const resizeHeaderOnScroll = () => {
        if(typeof document.getElementById("smg-header") !== 'undefined' && document.getElementById("smg-header") !== null) {
            const distanceY = window.pageYOffset || document.documentElement.scrollTop,
            shrinkOn = 5,
            headerEl = document.getElementById("smg-header");
      
          if (distanceY > shrinkOn) {
            headerEl.classList.add("smaller");
          } else {
            headerEl.classList.remove("smaller");
          }
        }
    }

    const hideHeaderOnScroll = () => {
        var st = window.pageYOffset || document.documentElement.scrollTop;
        if(st > 140) {
            const header = document.getElementById("smg-header");
            if (st > lastScrollTop){
                header.classList.add("hidden");
            }
            else if(st == lastScrollTop)
            {
              //do nothing (ie condition - necessary) 
            }
            else {
               header.classList.remove("hidden");
            }
            lastScrollTop = st;
        }
    }

    return (
        <Box component="header" className={classes.root} id="smg-header">
            <Container maxWidth="lg" className={`${classes.container} header-container`}>
                <Link className={`${classes.logo} site-logo`} to="/">
                    <img alt={`SMG logo`} src={Logo} />
                </Link>
                <Nav className={classes.headerContainer} />
            </Container>
            <MobileNav hasHome={true} />
            { isNewStore === true ? <StoreMenu /> : ""}
        </Box>
    )
}

const useStyles = makeStyles({
    root: {
        backgroundColor: '#f1f6fb',
        zIndex: "3",
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        transition: 'all .4s ease-in-out',
        display: 'flex',
        flexFlow: 'column nowrap',
        boxShadow: '0px 2px 16px #4b4b4b',
        '@media(min-width: 992px)' : {
            backgroundColor: "transparent",
            boxShadow: 'none',
            "&.smaller" : {
                backgroundColor: '#f1f6fb',
                boxShadow: '0px 2px 16px #4b4b4b',
                '& .site-logo' : {
                    maxWidth: '160px'
                },
                '& .header-container' : {
                    borderBottom: 'none'                
                }
            },
            "&.hidden" : {
                top: '-110px',
                overflow: 'hidden'
            }
        }
    },
    container: {
        display: "flex",
        flexFlow: "row nowrap",
        padding: "12px 15px",
        '@media(min-width: 992px)' : {
            padding: "16px 24px",
            borderBottom: '2px solid #004da2',
        }
    },
    logo : {
        margin: 0,
        maxWidth: "110px",
        transition: 'all .25s ease-in-out',
        alignSelf: 'center',
        height: 'auto',
        display: 'flex',
        '@media(min-width: 992px)' : {
            maxWidth: "225px",
        },
        '& img' : {
            maxWidth: '100%'
        }
    }
})

export default Header