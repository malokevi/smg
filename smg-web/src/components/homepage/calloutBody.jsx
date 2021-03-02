import React from 'react'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'

const CalloutBody = (props) => {
    const {icon, text, buttonText, path, index} = props
    const classes = useStyles()

    if(typeof path !== 'undefined') {
        return (
            <div className={`${classes.calloutGridItem}` } animateIn="animate__fadeIn">
                <Link to={path} className={`${classes.calloutStyle} callout-${index}`}>
                    <img alt={``} src={icon} />
                    <p>{text}</p>
                    <Button variant="contained" size="large" color="primary" className={classes.calloutButton}>{buttonText}</Button>
                </Link>
            </div>
        )
    }
}

const useStyles = makeStyles({
    calloutGridItem : {
        display: 'flex',
        height: '100%',
        '@media(min-width: 700px)' : {
            '& > .callout-0' : {
                marginRight: 0
            },
            '& > .callout-2' : {
                marginLeft: 0
            }
        }
    },
    calloutButton : {
        position: 'absolute',
        bottom: '29px',
        marginLeft: 'auto',
        marginRight: 'auto',
        left: 0,
        right: 0,
        textAlign: 'center',
        maxWidth: '200px',
        width: '100%'
    },
    calloutStyle : {
        textAlign: "center",
        cursor: 'pointer',
        border: '4px solid white',
        borderRadius: '12px',
        color: '#626262',
        padding: '0 16px 115px',
        position: 'relative',
        marginLeft: 'auto',
        marginRight: 'auto',
        maxWidth: '258px',
        width: '100%',
        textDecoration: 'none',
        transition: 'all .15s ease-in-out',
        display: 'flex',
        flexFlow: 'column nowrap',
        '& button' : {
            border: '1px solid rgb(0 77 162) !important',
            color: '#004da2',
            fontWeight: 'bold',
            padding: '18px 12px',
            backgroundColor: '#f1f6fb !important',
            '&:hover' : {
                color: 'white'
            }
        },
        '@media(max-width: 1279px)' : {
            marginTop: 0,
            marginBottom: 0,
        },
        '& img' : {
            maxWidth: "100px",
            transition: "all .25s ease-in-out",
            margin: '-38px auto 24px',
            '@media(min-width: 600px)' : {
                maxWidth: "110px",
            }
        },
        '& p' : {
            margin: "auto",
            color: 'white',
            fontSize: '22px',
            fontWeight: 500,
            fontFamily: '"Roboto", arial, serif',
            '@media(max-width: 460px)' : {
                maxWidth: "90%",
            },
            '@media(max-width: 600px)' : {
                fontSize: '18px',
            }
        },
        '&:hover' : {
            boxShadow: '0px 10px 21px -4px #004da2',
            transform: 'translateY(-3px)',
            '& img' : {
                transform: "translateY(-4px)"
            },
            '& button' : {
                backgroundColor: '#004da2 !important',
                color: 'white'
            }  
        }
    },
})

export default CalloutBody