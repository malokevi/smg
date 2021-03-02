import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
// import { Helmet } from 'react-helmet-async'
import { makeStyles } from '@material-ui/core/styles'
import { useLocation } from 'react-router-dom'

import { 
    Grid, 
    Container, 
    Box, 
    Paper, 
    ListSubheader, 
    List, 
    ListItem, 
    ListItemText,
    Collapse
} from '@material-ui/core'

import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import BorderBottom from '../assets/images/backgrounds/gray-border-bottom.png'
import LearningVec from '../assets/images/backgrounds/learning-vector.png'

import {toggleMobileNavAction} from '../store/actions/optionActions'
import Hero from './shared/Hero/Hero'

const TheFacts = (props) => {
    const classes = useStyles()
    const heroStyle = heroStyles()
    const [expanded, setExpanded] = useState(['1']);
    const [open, setOpen] = React.useState(false);
    const [openTwo, setOpenTwo] = React.useState(false);
    const [openThree, setOpenThree] = React.useState(false);
    const topNodes = ['1','9','19']
    const hash = useLocation().hash

    const {toggleMobileNav} = props

    const handleClick = () => {
        setOpen(!open);
    };
    const handleClickTwo = () => {
        setOpenTwo(!openTwo);
    };
    const handleClickThree = () => {
        setOpenThree(!openThree);
    };

    const nodeSelect = (n, index) => {
        if(topNodes.includes(index) === false) {
            const id = `about-${index}`
            const scrollElem = document.getElementById(id)
            if(scrollElem !== null) {
                var width = window.innerWidth

                if(width >= 992) { 
                    window.scroll({top: scrollElem.offsetTop - 120, left: 0, behavior: 'smooth' })
                } else {
                    window.scroll({top: scrollElem.offsetTop - 90, left: 0, behavior: 'smooth' })
                }
            }
        }        
    }

    useEffect(() => {
        if(hash.length > 0) {
            const ids = {
                '#about' : 1,
                '#testing' : 9,
                '#adp' : 19
            }
            
            nodeSelect(false, ids[hash])
        } else {
            window.scroll({top: 0, left: 0 })
        }
    }, [hash])

    useEffect(() => {
        toggleMobileNav(false)
    }, [toggleMobileNav])

    return (
        <>
            {/* <Helmet>
                <title>SMG - Sleep Disorders FAQ</title>
                <meta name="description" content="Learn about Sleep Apnea and other sleep disorders" />
            </Helmet> */}
            <Hero styles={heroStyle} image={LearningVec} title="The Facts" subtitle="Find details about Sleep Apnea to help you make more informed decisions regarding healthy sleep!" />
            <Box component="section" m={0} className={classes.factsBG}>
                <Container maxWidth="lg" justify="center">
                    <div className={classes.root}>
                        <Grid container spacing={3} className={classes.factsGrid}>
                            <Grid item xs={12} md={4}>
                                <List
                                    component="nav"
                                    aria-labelledby="nested-list-subheader"
                                    subheader={
                                    <ListSubheader component="div" className={classes.listLabel}>
                                        Topics
                                    </ListSubheader>
                                    }
                                    className={classes.navRoot}
                                >
                                    <ListItem button onClick={handleClick}>
                                    <ListItemText primary="About Sleep Apnea" />
                                    {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                                    </ListItem>
                                    <Collapse in={open} timeout="auto" unmountOnExit>
                                    <List component="div" disablePadding>
                                        <ListItem button className={classes.nested}>
                                        <ListItemText primary="What is Obstructive Sleep Apnea? (OSA)" />
                                        </ListItem>
                                        <ListItem button className={classes.nested}>
                                        <ListItemText primary="What are the Risks of Untreated Sleep Apnea?" />
                                        </ListItem>
                                        <ListItem button className={classes.nested}>
                                        <ListItemText primary="What is snoring and how is it different from sleep apnea?" />
                                        </ListItem>
                                        <ListItem button className={classes.nested}>
                                        <ListItemText primary="What causes the throat to narrow and create snoring or OSA?" />
                                        </ListItem>
                                        <ListItem button className={classes.nested}>
                                        <ListItemText primary="How Common is OSA?" />
                                        </ListItem>
                                        <ListItem button className={classes.nested}>
                                        <ListItemText primary="Is OSA life threatening?" />
                                        </ListItem>
                                        <ListItem button className={classes.nested}>
                                        <ListItemText primary="Sleep apnea: children and teens?" />
                                        </ListItem>
                                    </List>
                                    </Collapse>
                                    <ListItem button onClick={handleClickTwo}>
                                    <ListItemText primary="Testing and Diagnosis" />
                                    {openTwo ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                                    </ListItem>
                                    <Collapse in={openTwo} timeout="auto" unmountOnExit>
                                    <List component="div" disablePadding>
                                        <ListItem button className={classes.nested}>
                                        <ListItemText primary="What is a sleep study and why am I having one?" />
                                        </ListItem>
                                        <ListItem button className={classes.nested}>
                                        <ListItemText primary="Where are sleep studies held?" />
                                        </ListItem>
                                        <ListItem button className={classes.nested}>
                                        <ListItemText primary="How long will it take?" />
                                        </ListItem>
                                        <ListItem button className={classes.nested}>
                                        <ListItemText primary="What kind of room will I be sleeping in?" />
                                        </ListItem>
                                        <ListItem button className={classes.nested}>
                                        <ListItemText primary="What do I need to know, or do before coming to the sleep center for my sleep study?" />
                                        </ListItem>
                                        <ListItem button className={classes.nested}>
                                        <ListItemText primary="What happens in the morning?" />
                                        </ListItem>
                                        <ListItem button className={classes.nested}>
                                        <ListItemText primary="How long will it take to get my results?" />
                                        </ListItem>
                                        <ListItem button className={classes.nested}>
                                        <ListItemText primary="Will the cost of my Sleep Study be covered?" />
                                        </ListItem>
                                    </List>
                                    </Collapse>
                                    <ListItem button onClick={handleClickThree}>
                                    <ListItemText primary="Assisted Devices Program" />
                                    {openThree ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                                    </ListItem>
                                    <Collapse in={openThree} timeout="auto" unmountOnExit>
                                    <List component="div" disablePadding>
                                        <ListItem button className={classes.nested}>
                                        <ListItemText primary="What does the Assisted Devices Program do?" />
                                        </ListItem>
                                        <ListItem button className={classes.nested}>
                                        <ListItemText primary="Who can apply?" />
                                        </ListItem>
                                        <ListItem button className={classes.nested}>
                                        <ListItemText primary="How do I apply?" />
                                        </ListItem>
                                        <ListItem button className={classes.nested}>
                                        <ListItemText primary="How much will ADP pay?" />
                                        </ListItem>
                                        <ListItem button className={classes.nested}>
                                        <ListItemText primary="Will my health insurance company cover my share of the cost?" />
                                        </ListItem>
                                        <ListItem button className={classes.nested}>
                                        <ListItemText primary="Where can I get the CPAP or APAP equipment and supplies?" />
                                        </ListItem>
                                        <ListItem button className={classes.nested}>
                                        <ListItemText primary="What type of equipment and supplies are included in the ADP approved price?" />
                                        </ListItem>
                                        <ListItem button className={classes.nested}>
                                        <ListItemText primary="Who will show me how to use the CPAP device?" />
                                        </ListItem>
                                        <ListItem button className={classes.nested}>
                                        <ListItemText primary="I have been offered an extended warranty and service package at an extra charge. Must I purchase these additional services?" />
                                        </ListItem>
                                        <ListItem button className={classes.nested}>
                                        <ListItemText primary="What if I need to replace my equipment?" />
                                        </ListItem>
                                    </List>
                                    </Collapse>
                                </List>
                            </Grid>
                            <Grid className={classes.factGrid} item xs={12} md={8}>
                                <h2 id="about-1">About Sleep Apnea</h2>
                                <Paper elevation={0} className={classes.aboutBlock} id="about-2">
                                    <h3>What is Obstructive Sleep Apnea (OSA)?</h3>
                                    <p>Obstructive Sleep Apnea (OSA) is a sleep disorder that causes a person to stop breathing frequently during sleep. As a result, the body does not get enough oxygen. The sufferer experiences restless, broken and non-restorative sleep. In severe cases, people are awakened hundreds of times during the night . Most people are completely unaware of these sleep interruptions.</p>
                                    <p>Sleep Apnea is a potentially life threatening condition that can be easily diagnosed and effectively treated. Untreated, OSA tends to get progressively worse. It is important to discuss this issue with your family doctor.</p>
                                </Paper>
                                <Paper elevation={0} className={classes.aboutBlock} id="about-3">
                                    <h3>What are the Risks of Untreated Sleep Apnea?</h3>
                                    <ul>
                                        <li>High blood pressure</li>
                                        <li>Heart disease</li>
                                        <li>Stroke</li>
                                        <li>Fatigue-related motor vehicle and work accidents</li>
                                        <li>Decreased concentration and memory</li>
                                        <li>Decreased quality of life</li>
                                    </ul>
                                </Paper>
                                <Paper elevation={0} className={classes.aboutBlock} id="about-4">
                                    <h3>What is snoring and how is it different from sleep apnea?</h3>
                                    <p>During normal sleep, the muscles controlling the tongue and soft palate, although relaxed, hold the airway open. However under some circumstances, the airway becomes narrower, reducing the size of the air passage.</p>
                                    <p>Stronger breathing effort exerted to overcome the narrowing, causes the soft part of throat to vibrate, and the noise of snoring occurs.</p>
                                    <p>The airway can also narrow to some extent without snoring. The airflow to the lungs is therefore reduced and may reduce the amount of oxygen delivered to the body tissues. This may prevent you from getting the best night's sleep.</p>
                                    <p>If the throat is particularly narrow, or the muscles relax too much, the airway can become completely blocked, preventing breathing. This condition is obstructive sleep apnea (OSA).</p>
                                    <p>After a period of time which can be anything up to two minutes, the brain realizes there is a lack of oxygen. It then alerts the body to wake up. Although the sufferer is now aware of it , this cycle can occur several hundred times during the night, severely disrupting sleep.</p>
                                </Paper>
                                <Paper elevation={0} className={classes.aboutBlock} id="about-5">
                                    <h3>What causes the throat to narrow and create snoring or OSA?</h3>
                                    <p>There are several different causes. Some of these include increasing age, obesity, and nose or throat problems. Alcohol consumption and sleeping tablets relax the airway muscles potentially causing, or worsening snoring and OSA.</p>
                                </Paper>
                                <Paper elevation={0} className={classes.aboutBlock} id="about-6">
                                    <h3>How Common is OSA?</h3>
                                    <p>OSA is the most common sleep disorder. Although it is more common in men over the age of forty, OSA can affect people at any age - from newborn babies through to adults of either sex. Around 10-15% of the population suffers from OSA, a figure similar to that of asthma or diabetes.</p>
                                </Paper>
                                <Paper elevation={0} className={classes.aboutBlock} id="about-7">
                                    <h3>Is OSA life threatening?</h3>
                                    <p>OSA has been linked to a number of serious life threatening conditions including high blood pressure (hypertension), heart disease, stroke, chronic obstructive pulmonary disease (COPD), and congestive heart failure. As a result of severely disrupted sleep, many people suffering from OSA are excessively tired during the day. Studies have linked this tiredness to increased occurrence of traffic accidents.</p>
                                </Paper>
                                <Paper elevation={0} className={classes.aboutBlock} id="about-8">
                                    <h3>Sleep Apnea: Children and Teens</h3>
                                    <p>OSA has been linked to a number of serious life threatening conditions including high blood pressure (hypertension), heart disease, stroke, chronic obstructive pulmonary disease (COPD), and congestive heart failure. As a result of severely disrupted sleep, many people suffering from OSA are excessively tired during the day. Studies have linked this tiredness to increased occurrence of traffic accidents.</p>
                                </Paper>
                                <h2 id="about-9">Testing and Diagnosis</h2>
                                <Paper elevation={0} className={classes.aboutBlock} id="about-10">
                                    <h3>What is a sleep study and why am I having one?</h3>
                                    <p>The study is called a polysomnogram (PSG) and it's a safe, painless and simple evaluation of how your body functions during sleep. It is performed by a registered sleep technician. Data is recorded while you are sleeping and later reviewed by a board-certified sleep physician.The study can provide a detailed evaluation to determine if you have a sleep disorder. If you do have a sleep disorder, it is important to be diagnosed and treated. Untreated sleep disorders can contribute to other diseases and conditions such as; stoke, heart attack, high blood pressure and depression.A common sleep breathing disorder, Obstructive Sleep Apnea (OSA), is caused by the airway closing and preventing the flow of air into the lungs. The resulting pauses in breathing can occur 30 times or more per hour. Without effective treatment, people with OSA may be at risk of developing a number of serious health concerns. Because of the excessive daytime sleepiness that exists with OSA, drivers who are untreated can become a hazard to themselves and others while on the road.</p>
                                </Paper>
                                <Paper elevation={0} className={classes.aboutBlock} id="about-11">
                                    <h3>Where are sleep studies held?</h3>
                                    <p>Sleep studies typically occur in a facility called a sleep center or sleep lab. These facilities have staff and equipment dedicated to diagnosing sleep disorders. There may be multiple sleep studies going on in the facility throughout the day and evening.</p>
                                </Paper>
                                <Paper elevation={0} className={classes.aboutBlock} id="about-12">
                                    <h3>How long will it take?</h3>
                                    <p>The visit to the sleep centre takes a total of about 10 hours. The set-up process for the study takes about 30 minutes.</p>
                                </Paper>
                                <Paper elevation={0} className={classes.aboutBlock} id="about-13">
                                    <h3>What kind of room will I be sleeping in?</h3>
                                    <p>For comfort and privacy, the room is designed as a bedroom. There will be a bed with pillows and blankets. There may be a nightstand and reading lamp in the room. You can bring objects from home to make the environment more comfortable for you.</p>
                                </Paper>
                                <Paper elevation={0} className={classes.aboutBlock} id="about-14">
                                    <h3>What do I need to know, or do before coming to the sleep center for my sleep study?</h3>
                                    <p>One week before your study: You may be asked to keep a list of your sleep habits for a week before your study. This will provide your physician and the sleep lab staff with important backgrounds and information on your sleep habits. Also, a list of any medications you are taking and your use of caffeine, alcohol or drugs may be requested.</p>
                                    <p>The Day of your study: Shower, shampoo and dry your hair. Leave non-essential valuables at home. Arrive at least 15 minutes early for your study in case there is any additional paperwork to complete. Bring two-piece comfortable sleep attire and slippers.</p>
                                    <p>What NOT to do the day of your study: Don't nap, use hair gels, creams, oils, hairspray, lotions or creams on your face or body. Don't wear makeup or jewelry, acrylic nails or hair braids/weaves. Don't consume caffeinated foods or beverages (avoid: chocolate, coffee, tea and soda etc) </p>
                                </Paper>
                                <Paper elevation={0} className={classes.aboutBlock} id="about-15">
                                    <h3>What happens during the study?</h3>
                                    <p>When you arrive for your study you will be greeted by a staff member who will show you to your room and provide an explanation of the sleep study process. There may be a questionnaire for you to fill out. Then you will change into your sleep attire.</p>
                                    <p>The sleep technician will attach sensors to part of your body such as your scalp, forehead, chin, chest, ankle/leg and index finger. These sensors measure the activities of your brain, heart, lungs and certain muscles during sleep. The sensors are painless and are attached using a temporary adhesive/ gel paste that is easily removed with soap and water. Unless your body hair is extremely thick on your legs or chest, shaving will not be needed. The hair on your head can be parted when applying. Elastic bands may also be placed around your chest and abdomen to measure your breathing.</p>
                                    <p>The sensors are connected by wires to a computer that records and stores data. The wires are long and small, enabling you to move around in bed. After the wires sensors are applied you can watch television, read a book or simply lie in bed until you are ready to fall asleep. Before you actually fall asleep, the technician will come in the room to connect wires from the computer to the sensors on your body. If you need to use the restroom during night the sleep technician will let you know how to handle this.</p>
                                    <p>The sleep technician will be situated at a separate work station located in the facility which has various monitoring and recording devices to provide a full evaluation and report. If a sensor becomes detached the technician will awaken you to reattach it. Also, if the technician becomes aware- from the data being collected and monitored- that you may have a severe sleep breathing disorder and may benefit from immediate therapy that involves airflow to your airway, he or she will awaken you to apply the therapy equipment. Once you fall back to sleep, data will be collected on how you sleep patterns respond to the therapy.</p>
                                    <p>How long it takes you to fall asleep is part of the data that will be recorded.</p>
                                </Paper>
                                <Paper elevation={0} className={classes.aboutBlock} id="about-16">
                                    <h3>What happens in the morning?</h3>
                                    <p>The study will end when the technician determines that sufficient data has been recorded or when you awake in the morning. After the technician removes the sensors you can change your clothes and leave. You will be able to work the next day if needed and will be out of the lab by 6am or 7am.</p>
                                </Paper>
                                <Paper elevation={0} className={classes.aboutBlock} id="about-17">
                                    <h3>How long will it take to get my results?</h3>
                                    <p>The results take approximately two weeks and will be sent to the physician who prescribed the study. He or she will contact you to review the results, discuss if a diagnosis has been made and determine if therapy is needed. If the physician feels that you need to be treated with a sleep therapy device (CPAP), another sleep study may be scheduled so data can be collected while you sleep with the device.</p>
                                </Paper>
                                <Paper elevation={0} className={classes.aboutBlock} id="about-18">
                                    <h3>Will the cost of my Sleep Study be covered?</h3>
                                    <p>Your sleep study may be funded or covered by your insurance company. Ask the sleep clinic in your area.</p>
                                </Paper>
                                <h2 id="about-19">Assisted Devices Program</h2>
                                <Paper elevation={0} className={classes.aboutBlock} id="about-20">
                                    <h3>What does the Assisted Devices Program do?</h3>
                                    <p>The Ministry of Health and Long-Term Care, Assisted Devices Program (ADP) pays for continuous or autotitrating positive airway pressure devices for people who have been diagnosed by a sleep physician as having obstructive sleep apnea syndrome.</p>
                                </Paper>
                                <Paper elevation={0} className={classes.aboutBlock} id="about-21">
                                    <h3>Who can apply?</h3>
                                    <p>Any Ontario resident with a valid Health Card issued in their name who has obstructive sleep apnea syndrome and meets medical criteria specified by the Assisted Devices Program.</p>
                                </Paper>
                                <Paper elevation={0} className={classes.aboutBlock} id="about-22">
                                    <h3>How do I apply?</h3>
                                    <p>You will be referred to a registered ADP sleep clinic by your family physician where you will undergo diagnostic tests to determine the underlying cause of your disruptive sleep by a physician that specializes in sleep medicine. If you meet the medical eligibility criteria and your sleep physician confirms that you have obstructive sleep apnea syndrome, an ADP application will be completed. Your sleep physician and sleep clinic staff will decide what type of equipment you should use.</p>
                                </Paper>
                                <Paper elevation={0} className={classes.aboutBlock} id="about-23">
                                    <h3>How much will ADP pay?</h3>
                                    <p>ADP will pay 75% of an ADP approved price. You will be charged for the remaining 25%.</p>
                                    <p>If you are receiving social assistance benefits from Ontario Works (OW), Ontario Disability Support Program (ODSP), ADP will pay 100% of an ADP approved price.</p>
                                </Paper>
                                <Paper elevation={0} className={classes.aboutBlock} id="about-24">
                                    <h3>Will my health insurance company cover my share of the cost?</h3>
                                    <p>Many will. If you have private medical coverage, check with your insurer or agent to see if they will pay your share of the cost.</p>
                                </Paper>
                                <Paper elevation={0} className={classes.aboutBlock} id="about-25">
                                    <h3>Where can I get the CPAP or APAP equipment and supplies?</h3>
                                    <p>From any respiratory vendor registered with ADP. These vendors can bill ADP directly for the 75% portion of the cost of your equipment.</p>
                                </Paper>
                                <Paper elevation={0} className={classes.aboutBlock} id="about-26">
                                    <h3>What type of equipment and supplies are included in the ADP approved price?</h3>
                                    <p>The ADP provides funding assistance for a complete CPAP or APAP system. For ADP purposes, a CPAP or APAP system consists of a CPAP/APAP device, heated humidifier, basic mask and headgear, carrying case, 6 ft tubing, all necessary caps and filters, power cord and patient instruction manual.</p>
                                    <p>If a client requires items that are not part of the CPAP or APAP system, the respiratory vendor may invoice the client for 100% of the cost of these items. For example, a specialized mask and headgear may be better suited to your needs and can be purchased separately from the basic CPAP or APAP system.</p>
                                </Paper>
                                <Paper elevation={0} className={classes.aboutBlock} id="about-27">
                                    <h3>Who will show me how to use the CPAP device?</h3>
                                    <p>The vendor's health professional will assist you in explaining how the CPAP device functions and how to carry out the routine care and cleaning of the system. Please refer to your Client Instruction Manual, provided by your respiratory vendor, for specific instructions and detail. During the initial instructions, the health care professional will determine if the basic mask and headgear is appropriate for you. If not, you will be fitted for the mask and headgear best suited to your needs. This initial instruction period may take up to one hour or less.</p>
                                </Paper>
                                <Paper elevation={0} className={classes.aboutBlock} id="about-28">
                                    <h3>I have been offered an extended warranty and service package at an extra charge. Must I purchase these additional services?</h3>
                                    <p>The ADP expects all respiratory vendors registered with the ADP to ensure that their clients are instructed in the appropriate and safe use of the equipment. All CPAP/APAP systems funded by the ADP must have a 3-year warranty. Respiratory vendors may provide additional services such as an extended warranty, yearly pressure checks and calibrations or pressure adjustments. The vendor may offer these services to the client at a cost separate from the funding support provided by the ADP.</p>
                                    <p>Vendors who offer ADP clients a service package must provide the client with the option to purchase the service package separately and not as a mandatory service when purchasing the CPAP or APAP device. The initial instruction in the use and maintenance of the CPAP or APAP device is not included in service packages.</p>
                                </Paper>
                                <Paper elevation={0} className={classes.aboutBlock} id="about-29">
                                    <h3>What if I need to replace my equipment?</h3>
                                    <p>ADP will contribute towards the cost of a replacement every five years if your equipment is no longer working and cannot be repaired. You must still meet the eligibility requirements and you will need a new ADP form signed by the doctor.</p>
                                </Paper>
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
        }
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
        },
        '& h2' : {
            color: 'rgb(24 53 69)',
            marginTop: 0,
            borderBottom: '2px solid rgb(24 53 69)'
        }
    },
    factsBG : {
        backgroundColor: '#f1f6fb'
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
                color: '#004da2'
            }
        }
    },
    aboutBlock : {
        padding: '24px 16px',
        marginBottom: '3rem',
        backgroundColor: 'white !important',
        border: '3px solid rgb(24 53 69)',
        color: 'rgb(24 53 69)',
        fontFamily: '"Roboto", arial, serif',
        '@media(min-width: 600px)' : {
            padding: '24px',
        },
        '& h3' : {
            marginTop: 0,
            marginBottom: 0,
            fontSize: '25px',
            '@media(min-width: 600px)' : {
                fontSize: '30px',
            },
        }
    },
    navRoot: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: '#1970bb',
        boxShadow: '2px 3px 16px #bcbcbc',
        color: 'white',
        position: 'sticky',
        top: '20px',
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
        borderBottom: '1px solid white'
      } 
}));

const heroStyles = makeStyles((theme) => ({
    heroSwiperTwo : {
        backgroundColor: '#1970bb',
        position: 'relative',
        overflow: 'hidden',
        '& h1' : {
            color: 'white'
        },
        '& p' : {
            color: 'white'
        },
        '& img' : {
            maxHeight: '651px',
            right: '-136px !important',
            bottom: '30px !important',
            opacity: '.3',
            display: 'block !important',
            maxWidth: '120%',
            height: 'auto !important',
            '@media(max-width: 670px)' : {
                right: 'auto !important',
                left: '0 !important',
                maxWidth: 'none !important',
                width: 'auto',                
            },
            '@media(max-width: 991px)' : {
                bottom: '30px !important',
                maxHeight: '600px !important'
            },
            '@media(min-width: 1240px)' : {
                maxHeight: '502px',
                right: '-171px !important',
                bottom: '57px !important',
                opacity: '1',
            },
            '@media(min-width: 1370px)' : {
                maxHeight: '519px',
                right: '-146px !important',
                bottom: '60px !important',
            },
            '@media(min-width: 1600px)' : {
                maxHeight: '612px',
            },
            '@media(min-width: 1800px)' : {
                maxHeight: '602px !important',
                right: '0 !important'
            }
        }
    },
    heroBorder : {
        backgroundImage: `url(${BorderBottom})`
    }
}));

export default connect(false, MapDispatchToProps)(TheFacts)
