import { loginUserData, loginUserError, loginUserLoading, userFetchData, userFetchError, userFetchLoading, userSignupError, userSignupLoading } from "../actions/auth.action"
import httpService from "../services/httpService";

export const createUser = (data) => {
    return async dispatch => {
        try {
            dispatch(userSignupError(""));
            dispatch(userSignupLoading(true));
            const response = await httpService.post('/create-user', data);
            localStorage.setItem("id", response.data._id);
            window.location.href = '/dashboard';
            // dispatch(userSignup(response.data));
            // dispatch(userSignupLoading(false));
        } catch (error) {
            dispatch(userSignupError("Error Occured!!"));
            dispatch(userSignupLoading(false));
        }
    }
}

export const fetchUser = () => {
    return async dispatch => {
        try {
            dispatch(userFetchError(""));
            dispatch(userFetchLoading(true));
            const response = await httpService.get('/me');
            dispatch(userFetchData(response.data));
            dispatch(userFetchLoading(false));
        } catch (error) {
            dispatch(userFetchError("Error Occured!!"));
            dispatch(userFetchLoading(false));
        }
    }
}

export const loginUser = (data) => {
    return async dispatch => {
        try {
            dispatch(loginUserError(""));
            dispatch(loginUserLoading(true));
            const response = await httpService.post('/login', data);
            dispatch(loginUserData(response.data));
            localStorage.setItem("id", response.data[0]._id);
            window.location.href = '/dashboard';
        } catch (error) {
            dispatch(loginUserError("Error Occured!!"));
            dispatch(loginUserLoading(false));
        }
    }
}