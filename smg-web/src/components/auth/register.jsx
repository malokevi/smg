import React, { useState } from "react"
import { Redirect } from "react-router-dom"
import {connect} from 'react-redux'

import { makeStyles } from '@material-ui/core/styles'
import { Box, Button, TextField } from '@material-ui/core'

import {registerUserAction} from '../../store/actions/authActions'

const Register = (props) => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [password2, setPassword2] = useState("")
    const [errors, setErrors] = useState({})

    const {registerUser, isRegistered, isAuthed} = props

    const classes = useStyles()

    const handleSubmit = e => {
        const userData = {
            name: name,
            email: email,
            password: password,
            password2: password2
        };
        
        registerUser(userData)
    }

    if(isRegistered === true || isAuthed === true) {
        return <Redirect to='/'/>
    } else {
        return (
            <>
                <Box component="section" className={classes.authSection} m={0}> 
                    <form className={classes.formContainer}>
                        <h1>Register</h1>
                        <TextField onChange={(e) => setName(e.target.value)} label="Name" variant="outlined" />
                        <TextField onChange={(e) => setEmail(e.target.value)} label="Email" variant="outlined" />
                        <TextField onChange={(e) => setPassword(e.target.value)} variant="outlined" label="Password" />
                        <TextField onChange={(e) => setPassword2(e.target.value)} variant="outlined" label="Confirm Password" />
                        <Button onClick={() => handleSubmit()} variant="contained" color="primary">
                            Register
                        </Button>
                    </form>
                </Box>
            </>
        )
    }
}

const MapStateToProps = (state) => {
    return {
        isRegistered: state.auth.isRegistered,
        isAuthed: state.auth.isAuthenticated
    }
}

const MapDispatchToProps = (dispatch) => {
    return {
        registerUser : (props) => {
            dispatch(registerUserAction(props))
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
            marginTop: 0
        }
    },
    formGrid : {
        display: 'flex'
    }
})

export default connect(MapStateToProps, MapDispatchToProps)(Register)
