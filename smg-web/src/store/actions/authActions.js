
import {
  SET_CURRENT_USER,
  USER_LOADING,
  REG_COMPLETE,
  POST_LOGIN,
  LOGGED_IN,
  POST_REGISTER,
  USER_LOGGED_OUT,
  USER_LOGOUT,
} from "../actions/actionTypes"

//REGISTER
export const registerUserAction = (params) => {
    return {
        type: POST_REGISTER,
        params
    }
}

export const userRegisteredAction = (result) => ({
    type: REG_COMPLETE,
    result
})

//LOGIN
export const loginUserAction = (params) => ({
    type: POST_LOGIN,
    params
})

export const userLoggedInAction = (token) => ({
    type: LOGGED_IN,
    token
})

//SET USER
export const setCurrentUser = decoded => {
    return {
      type: SET_CURRENT_USER,
      payload: decoded
    };
};

export const setUserLoadingAction = () => ({
    type: USER_LOADING
})

//LOGOUT
export const userLogoutAction = () => ({
    type: USER_LOGOUT
})

export const userLoggedOutAction = () => ({
    type: USER_LOGGED_OUT
})