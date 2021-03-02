import React from 'react'
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
import {makeStyles} from '@material-ui/core/styles' 

const Testimonial = (data) => {
    const {author, text, regards} = data

    const classes = useStyles()

    return (
        <div className={`${classes.testimonial} testimonialBlock`}>
            <FormatQuoteIcon className={classes.testimonialQuote} fontSize='large' />
            <p className={`${classes.testimonialText} text`} data-swiper-parallax="-300">{text}</p>
            <p className={`${classes.testimonialRegards} text`} data-swiper-parallax="-200">{regards}</p>
            <p className={`${classes.testimonialName}`} data-swiper-parallax="-100">{author}</p>
        </div>
    )
}

const useStyles = makeStyles({
    testimonial : {
        margin: 'auto',
        position: 'relative',
        maxWidth: '75%',
        minWidth: '260px',
        display: 'flex',
        flexFlow: 'column nowrap',
        '@media(max-width: 600px)' : {
            padding: '0 15px',
            maxWidth: '95%'
        }
    },
    testimonialRegards : {
        textAlign: 'center',
        fontFamily: "'Patrick Hand', cursive",
        fontSize: '20px',
        fontStyle: 'italic',        
        marginBottom: 0,
        '@media(min-width: 800px)' : {
            fontSize: '24px'
        }    
    },
    testimonialName : {
        textAlign: 'center',
        fontFamily: "'Patrick Hand', cursive",
        fontSize: '26px',
        fontStyle: 'italic',       
        marginTop: 0,
        marginBottom: 0,
        '@media(min-width: 800px)' : {
            fontSize: '31px'
        }
    },
    testimonialText : {
        fontFamily: "'Patrick Hand', cursive",
        fontSize: '22px',
        maxWidth: '100%',
        lineHeight: '1.3',
        textAlign: 'center',
        fontWeight: '500',
        margin: '22px auto',
        width: '88%',
        '@media(min-width: 800px)' : {
            fontSize: '26px'
        },
        '@media(min-width: 600px)' : {
            width: '100%',
        }
    },
    testimonialQuote : {
        position: 'relative',
        marginLeft: 'auto',
        marginRight: 'auto',
        textAlign: 'center',
        fontSize: '98px',
        marginBottom: '-1rem',
        marginTop: '-26px',
        '@media(min-width: 800px)' : {
            fontSize: '150px',
            marginTop: '-2rem'
        }
    }
})

export default Testimonial