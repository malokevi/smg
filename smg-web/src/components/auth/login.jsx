import React, { useState } from "react"
import { Link, Redirect } from "react-router-dom"
import {connect} from 'react-redux'

import { makeStyles } from '@material-ui/core/styles'
import { Box, Button, TextField } from '@material-ui/core'

import {loginUserAction} from '../../store/actions/authActions'

const Login = (props) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState({})

    const {userLogin, isAuthed} = props
    const classes = useStyles()

    const handleSubmit = () => {
        const userData = {
          email: email,
          password: password
        };

        const result = userLogin(userData)
    };

    if(isAuthed === true) {
        return <Redirect to='/'/>
    } else {
        return (
            <>
                <Box component="section" className={classes.authSection} m={0}> 
                    <form className={classes.formContainer}>
                        <h1>Login To SMG</h1>
                        <TextField onChange={(e) => setEmail(e.target.value)} label="Email" variant="outlined" />
                        <TextField onChange={(e) => setPassword(e.target.value)} variant="outlined" label="Password" />
                        <Button onClick={() => handleSubmit()} variant="contained" color="primary">
                            Login
                        </Button>

                        <Link to="/register"><h2>Or Register Now!</h2></Link>
                    </form>
                </Box>
            </>
        )
    }
}

const MapStateToProps = (state) => {
    return {
        isAuthed : state.auth.isAuthenticated
    }
}

const MapDispatchToProps = (dispatch) => {
    return {
        userLogin :  (props) => {
            dispatch(loginUserAction(props))
        }
    }
}

const useStyles = makeStyles({
    authSection : {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '100vh',
        backgroundColor: '#f1f6fb',
        padding: 0,
        display: 'flex'
    },
    formContainer : {
        margin: 'auto',
        padding: '32px 24px',
        display: 'flex',
        flexFlow: 'column nowrap',
        width: '520px',
        backgroundColor: 'white',
        boxShadow: '2px 3px 16px #bcbcbc',
        borderRadius: '8px',
        maxWidth: '96%',
        '& > div' : {
            marginBottom: '1.4rem'
        },
        '& h1' : {
            fontSize: '26px',
            fontFamily: '"Roboto", arial, serif',
            fontWeight: 'bold',
            marginTop: 0,
            textAlign: 'center'
        },
        '& h2' : {
            fontSize: '22px',
            fontFamily: '"Roboto", arial, serif',
            fontWeight: 'bold',
            textAlign: 'center',
            margin: '44px 0 0'
        }
    },
    formGrid : {
        display: 'flex'
    }
})

export default connect(MapStateToProps, MapDispatchToProps)(Login)
