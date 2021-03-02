import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import Swiper from 'swiper'
import 'swiper/swiper-bundle.min.css'

import { makeStyles } from '@material-ui/styles'
import Button from '@material-ui/core/Button'

import CushionImg from "../../assets/images/products/cushion.png"
import MaskImg from "../../assets/images/products/CPAP-mask.png"
import ChinStrapImg from "../../assets/images/products/ChinStrap.png"
import AccessoryImg from "../../assets/images/products/Accessory.png"
import FilterImg from "../../assets/images/products/Filter.png"
import HumidifierImg from "../../assets/images/products/humidified-chamber.png"
import ReplacementsImg from "../../assets/images/products/replacement-part.png"
import TubesImg from "../../assets/images/products/tubes.png"

const defineSlides = [
    {
        image: CushionImg,
        text: 'Cushions',
        path: '/store/index.php?route=product/category&path=82'
    },
    {
        image: MaskImg,
        text: 'CPAP Masks',
        path: '/store/index.php?route=product/category&path=62'
    },
    {
        image: ChinStrapImg,
        text: 'Chin Straps',
        path: '/store/index.php?route=product/category&path=61'
    },
    {
        image: AccessoryImg,
        text: 'CPAP Accessories',
        path: '/store/index.php?route=product/category&path=65'
    },
    {
        image: FilterImg ,
        text: 'Filters',
        path: '/store/index.php?route=product/category&path=63'
    },
    {
        image: HumidifierImg,
        text: 'Humidified Chambers',
        path: '/store/index.php?route=product/category&path=66'
    },
    {
        image: ReplacementsImg,
        text: 'Replacement Parts',
        path: '/store/index.php?route=product/category&path=75'
    },
    {
        image: TubesImg,
        text: 'Tubing',
        path: '/store/index.php?route=product/category&path=64'
    }
]

const ProductSlide = (props) => {
    const {text, image, path} = props
    return(
        <div className="swiper-slide product-slide">
            <img alt={`${text}`} src={`${image}`} />
            <Link to={path}>
                <Button variant="contained" size="large" color="primary" className="productBtn">{text}</Button>
            </Link>
        </div>
    )
}

const ProductSlider = () => {
    const classes = useStyles()

    useEffect(() => {
        new Swiper ('.product-swiper', {
            slidesPerView: 1,
            spaceBetween: 30,
            centeredSlides: true,
            loop: true,
            autoplay: {
                delay: 4500
            },
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
            },
            breakpoints: {
                1025: {
                  slidesPerView: 3
                },
                800: {
                    slidesPerView: 2
                }
            }
          })
    }, [])

    return(
        <div className={`${classes.productSlide} product-swiper`}>
            <div className="swiper-wrapper">
                {defineSlides.map((m, index) => <ProductSlide key={`productslide-${index}`} text={m.text} image={m.image} path={m.path}></ProductSlide>)}
            </div>
            <div className="swiper-pagination"></div>
        </div>
    )
}


const useStyles = makeStyles({
    productSlide: {
        width: '100%',
        '& .product-slide' : {
            textAlign: 'center',
            transition: 'all .25s ease-in-out',
            cursor: 'pointer',
            display: 'flex',
            flexFlow: 'column nowrap',
            textDecoration: 'none',
            '&:hover' : {
                '& img' : {
                    opacity: '.8'
                },
                '& button' : {
                    backgroundColor: '#004da2 !important',
                    color: "white"
                }
            },
            '& img' : {
                transition: 'all .25s ease-in-out',
                maxWidth: '160px',
                alignSelf: 'center',
                '@media(min-width: 800px)' : {
                    maxWidth: '190px'
                }
            },
            '&.swiper-slide-active' : {
                transform: 'scale(1.4)'
            }, 
            '& .shopText' : {
                color: '#004da2',
                fontWeight: 'bold',
                margin: '0 auto',
                fontSize: '18px'
            }, 
            '& h3' : {
                fontWeight: 'lighter',
                margin: '0 auto'
            },
            '& .productBtn' : {
                color: '#004da2',
                backgroundColor: 'white !important',
                fontWeight: 'bold',
                marginTop: '8px',
                border: '1px solid #004da2',
                alignSelf: 'center',
                transition: 'all .25s ease-in-out'
            }
        },
        '& .swiper-pagination' : {
            fontSize: "30px",

            '& .swiper-pagination-bullet' : {
                background: 'white',
                width: "14px",
                height: "14px",
                opacity: ".4",
                '&.swiper-pagination-bullet-active' : {
                    opacity: "1",
                    
                }   
            }
        }
    },
    button : {
        backgroundColor: '#004da2',
        color: 'white'
    }
})

export default ProductSlider