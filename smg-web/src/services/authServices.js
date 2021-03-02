import Axios from 'axios'
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";

const apiUrl = `${process.env.REACT_APP_API_URL}users`

export const handleLogin = (props) => {
  const {email, password} = props.params 

  console.log('login')

  const result = Axios.post(`${apiUrl}/login`, {
    email,
    password
  }).then(result => {
    // Set token to localStorage
    const { token } = result.data;
    localStorage.setItem("jwtToken", token);
    // Set token to Auth header
    setAuthToken(token);
    // Decode token to get user data
    const decoded = jwt_decode(token);
    return decoded
  })
    .catch(error => {
    console.error(error.message)
  })

  console.log('result', result)

  return result
}

export const handleRegister = (props) => {
    const {name, email, password, password2} = props.params

    const result = Axios.post(`${apiUrl}/register`, {
      name,
      email,
      password,
      password2
    }).then(result => result.data)
      .catch(error => {
      console.error(error.message)
    })

    return result
}

export const handleLogout = () => {
  localStorage.clear()
  setAuthToken(false)
  return true
}