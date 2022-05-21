import { CREATE_USER_ERROR, CREATE_USER_LOADING, CREATE_USER_SEND_DATA, LOGIN_ERROR, LOGIN_LOADING, LOGIN_USER, ME_FETCH, ME_FETCH_ERROR, ME_FETCH_LOADING } from "./action.constant"

export const userSignup = (data) => ({
    type: CREATE_USER_SEND_DATA,
    payload: data
})

export const userSignupLoading = (isLoading) => ({
    type: CREATE_USER_LOADING,
    payload: isLoading
})
export const userSignupError = (message) => ({
    type: CREATE_USER_ERROR,
    payload: message
})

export const userFetchError = (message) => ({
    type: ME_FETCH_ERROR,
    payload: message
})
export const userFetchLoading = (isLoading) => ({
    type: ME_FETCH_LOADING,
    payload: isLoading
})
export const userFetchData = (data) => ({
    type: ME_FETCH,
    payload: data
})

export const loginUserData = (data) => ({
    type: LOGIN_USER,
    payload: data
})
export const loginUserLoading = (isLoading) => ({
    type: LOGIN_LOADING,
    payload: isLoading
})
export const loginUserError = (message) => ({
    type: LOGIN_ERROR,
    payload: message
})