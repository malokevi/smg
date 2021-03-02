import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useLocation } from 'react-router-dom'

import ToTop from '../../../assets/images/icons/return-to-top.png'

const ReturnToTop = () => {
    const classes  = useStyles()
    let location = useLocation()

    useEffect(() => {
        displayButton()
        window.addEventListener("scroll", displayButton)
    }, [])

    const scrollToTop = () => {
        if(location.pathname !== '/') {
            const bannerHeight = document.getElementById('overlay-select').offsetHeight
            window.scroll({top: bannerHeight - 95, left: 0, behavior: 'smooth' })
        } else {
            window.scroll({top: 0, left: 0, behavior: 'smooth' })
        }
    }    

    const displayButton = () => {
        const distanceY = window.pageYOffset || document.documentElement.scrollTop,
          shrinkOn = 500,
          headerEl = document.getElementById("returnToTop");
    
          if(headerEl !== null) {
            if (distanceY > shrinkOn) {
                headerEl.classList.add("hide");
              } else {
                headerEl.classList.remove("hide");
              }
          }
    }

    return (
        <div onClick={() => scrollToTop()} className={classes.returnToTop} id="returnToTop">

        </div>
    )
}

const useStyles = makeStyles({
    returnToTop : {
        opacity: 0,
        pointerEvents: 'none',
        width: '35px',
        height: '35px',
        zIndex: 3,
        position: 'fixed',
        bottom: '15px',
        right: '15px',
        cursor: 'pointer',
        transition: 'all .25s ease-in-out',
        backgroundImage: `url(${ToTop})`,
        backgroundSize: 'contain',
        '@media(min-width: 800px)' : {
            width: '45px',
            height: '45px',
            bottom: '24px',
            right: '24px',
        },
        '&:hover' : {
            transform: 'translateY(-8px)'
        }, '&.hide' : {
            opacity: 1,
            pointerEvents: 'all'
        }
    }
})

export default ReturnToTop