import React, { useEffect, useState } from 'react'
import {connect} from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import { 
    Grid, 
    Container, 
    Box, 
    Button,  
    List, 
    ListItem, 
    ListItemText, 
    ListSubheader 
} from '@material-ui/core'

import GetAppIcon from '@material-ui/icons/GetApp'

import BorderBottom from '../assets/images/backgrounds/white-border-bottom.png'
import FactsBG from '../assets/images/backgrounds/blue-background-2.jpg'
import {toggleMobileNavAction} from '../store/actions/optionActions'
import { getEntriesAction } from '../store/actions/contentfulActions'

import NewsVec from '../assets/images/backgrounds/news-vector.svg'
import Hero from './shared/Hero/Hero'

const Newsletters = (props) => {
    const classes = useStyles()
    const heroStyle = heroStyles()
    const [selected, setSelected] = useState("1")
    const [newsletters, setNewsletters] = useState([]);
    const {toggleMobileNav, getContentfulEntries, entries} = props
    let nodeId = 1

    const nodeSelect = (index) => {
        setSelected(index.toString())
    }

    const displayNewsletters = (data, index) => {        
        const file = data.fields.file.url
        const title = data.fields.title
        const selIndex = index + 1

        if(selIndex.toString() === selected) {
            return(
                <article key={index} className={`${classes.newsletterBlock} isActive`}>
                    <h2 id="newsletter-1">{title}</h2>
                    <div className={classes.newsletterBox}>
                        <img alt={title} src={file} />
                        <a href={file} download={title}>
                            <Button 
                                size="large"
                                variant="contained"
                                color="primary"
                                className={classes.button}
                                endIcon={<GetAppIcon />}
                            >
                                Download File
                            </Button>
                        </a>
                    </div>
                </article>
            )
        }
    }

    useEffect(() => {
        window.scroll({top: 0, left: 0 })
        getContentfulEntries('3W6e4clkFDzh3FwzGExlqQ')
    }, [])

    useEffect(() => {
        toggleMobileNav(false)
    }, [toggleMobileNav])

    useEffect(() => {
        setNewsletters(entries.newsletterFile)
    }, [entries])

    return (
        <>
            <Hero styles={heroStyle} image={NewsVec} title="SMG Newsletters" subtitle="Read our newsletters and get up to date with what's happening at Sleep Management Group." />
            <Box component="section" m={0} className={classes.factsBG}>
                <div className={classes.factsBgOverlay}></div>
                <Container className={classes.containerFix} maxWidth="lg" justify="center">
                    <div className={classes.root}>
                        <Grid container spacing={3} className={classes.factsGrid}>
                            <Grid item xs={12} md={4}>
                                <List
                                    component="nav"
                                    aria-labelledby="nested-list-subheader"
                                    subheader={
                                    <ListSubheader component="div" className={classes.listLabel}>
                                        Articles and Newsletters
                                    </ListSubheader>
                                    }
                                    className={classes.navRoot}
                                >
                                    {typeof newsletters !== 'undefined' ? newsletters.map((n, index) => {
                                        const theIndex = index + 1
                                        return (
                                            <ListItem key={index} onClick={(index) => nodeSelect(theIndex)} button>
                                                <ListItemText primary={n.fields.title} />
                                            </ListItem>
                                        )
                                    }) : ""}
                                </List>
                            </Grid>
                            <Grid className={classes.factGrid} item xs={12} md={8}>
                                {typeof newsletters !== 'undefined' ? newsletters.map((n, index) => {
                                     return displayNewsletters(n, index)
                                }) : ""}
                            </Grid>
                        </Grid>
                    </div>
                </Container>
            </Box>
        </>
    )
}

const MapDispatchToProps = (dispatch) => {
    return {
        toggleMobileNav : (val) => {
            dispatch(toggleMobileNavAction(val))
        },
        getContentfulEntries :  (id) => {
            dispatch(getEntriesAction(id))
        }
    }
}

const mapStateToProps = (state) => {
    return {
        entries: state.contentful
    }
}

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      width: '100%',
      "& ::-webkit-scrollbar-thumb" : {
        borderRadius: "10px",
        boxShadow: "inset 0 0 6px rgba(0,0,0,.3)",
        backgroundColor: "#797979"
        }, 
        "& ::-webkit-scrollbar-track" : {
            boxShadow: "inset 0 0 6px rgba(0,0,0,0.3)",
            borderRadius: "0px",
            backgroundColor: "#F5F5F5"
        },
        "& ::-webkit-scrollbar" : {
            width: "8px",
            backgroundColor: "#797979"
        }
    },
    factsGrid : {
        maxWidth: '100%',
        '@media(max-width: 979px)' : {
            margin: 0,
            '& .MuiGrid-item' : {
                padding: 0
            }
        }
    },
    factsBG : {
        backgroundColor: 'transparent',
        backgroundImage: FactsBG,
        backgroundSize: 'cover',
        position: 'relative'
    },
    treeRoot: {
        flexGrow: 1,
        maxWidth: '100%',
        position: 'sticky',
        top: '120px',
        color: 'rgb(24 53 69)',
        '@media(max-width: 979px)' : {
            marginBottom: '2rem'
        },
        '& .MuiTreeItem-iconContainer' : {
            marginTop: '-8px',
            '& .MuiSvgIcon-root' : {
                fontSize: '22px',
                marginTop: '9px',
                transition: 'all .25s ease-in-out'
            }
        },
        '& .MuiTreeItem-label' : {
            fontSize: '22px'
        },
        '& .MuiTreeItem-content' : {
            marginBottom: '10px'
        },
        '& .MuiCollapse-container' : {
            '& .Mui-selected' : {
                backgroundColor: 'rgba(255, 255, 255, 0.2)'
            },
            '& .MuiTreeItem-root' : {
                marginBottom: '10px'
            },
            '& .MuiTreeItem-label' : {
                fontSize: '18px',
                color: 'rgb(24 53 69)'
            }
        }
    },
    aboutBlock : {
        padding: '24px 16px',
        marginBottom: '3rem',
        backgroundColor: 'rgba(255, 255, 255, .85) !important',
        '@media(min-width: 600px)' : {
            padding: '24px',
        },
        '& h3' : {
            marginTop: 0,
            fontSize: '25px',
            '@media(min-width: 600px)' : {
                fontSize: '30px',
            },
        }
    },
    factGrid : {
        '& h2' : {
            color: 'rgb(24 53 69)',
            marginTop: 0,
            borderBottom: '2px solid rgb(24 53 69)'
        }
    },
    newsletterBox : {
        width: '100%',
        '& img' : {
            width: '100%'
        },
        '& a' : {
            textDecoration: 'none'
        }
    },
    containerFix : {
        position: "relative",
        zIndex: 1
    },
    navRoot: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: '#1970bb',
        boxShadow: '2px 3px 16px #bcbcbc',
        color: 'white',
        position: 'sticky',
        top: '140px',
        '@media(max-width: 959px)' : {
            marginBottom: '2rem',
            width: '100%',
            maxWidth: '100%'
        }
    },
    nested: {
        paddingLeft: theme.spacing(4),
        backgroundColor: '#1264aa'
    },
    listLabel : {
        color: 'white',
        fontSize: '20px',
        borderBottom: '1px solid white',
    } 
}));


const heroStyles = makeStyles((theme) => ({
    heroSwiperTwo : {
        backgroundColor: '#466076',
        position: 'relative',
        overflow: 'hidden',
        '& h1' : {
            color: 'white'
        },
        '& p' : {
            color: 'white'
        },
        '& img' : {
            right: '-300px !important',
            bottom: '50px !important',
            opacity: '.3',
            display: 'block !important',
            maxWidth: '100%',
            width: '1000px',
            height: 'auto !important',
            '@media(max-width: 670px)' : {
                right: 'auto !important',
                left: '20px !important',
                maxWidth: 'none !important',
                width: '600px',
                bottom: '0'                
            },
            '@media(max-width: 991px)' : {
                bottom: '30px',
                maxHeight: '600px !important'
            },
            '@media(min-width: 1240px)' : {
                maxHeight: '502px',
                right: '-311px !important',
                bottom: '57px !important',
                opacity: '1',
            },
            '@media(min-width: 1370px)' : {
                maxHeight: '90% !important',
                right: '-246px !important',
                bottom: '60px !important',
            },
            '@media(min-width: 1600px)' : {
                maxHeight: '612px',
            },
            '@media(min-width: 1800px)' : {
                maxHeight: '550px !important',
                right: '-110px !important'
            }
        }
    },
    heroBorder : {
        backgroundImage: `url(${BorderBottom})`
    }
}));

export default connect(mapStateToProps, MapDispatchToProps)(Newsletters)