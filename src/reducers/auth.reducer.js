import { CREATE_USER_ERROR, CREATE_USER_LOADING, CREATE_USER_SEND_DATA, LOGIN_ERROR, LOGIN_LOADING, LOGIN_USER, ME_FETCH, ME_FETCH_ERROR, ME_FETCH_LOADING } from "../actions/action.constant"


const initialValue = {
    data: [],
    loading: false,
    fetchLoading: false,
    loginLoading: false,
    fetchError: "",
    error: "",
    loginError: ""
}

export const authReducer = (state = initialValue, action) => {
    switch (action.type) {

        case LOGIN_USER:
            {
                const payload = action.payload;
                return {...state, data: payload, loginLoading: true }
            }

        case ME_FETCH:
            {
                const payload = action.payload
                return {...state, data: payload, fetchLoading: true }
            }
        case CREATE_USER_SEND_DATA:
            {
                const payload = action.payload
                return {...state, data: [...state.data, ...payload], loading: true }
            }

        case ME_FETCH_ERROR:
            {
                return {...state, fetchError: action.payload }
            }

        case LOGIN_ERROR:
            {
                return {...state, loginError: action.payload }
            }

        case CREATE_USER_ERROR:
            {
                const payload = action.payload;
                return {...state, error: payload }
            }

        case ME_FETCH_LOADING:
            {
                return {...state, fetchLoading: action.payload }
            }

        case LOGIN_LOADING:
            {
                return {...state, loginLoading: action.payload }
            }

        case CREATE_USER_LOADING:
            {
                const payload = action.payload;
                return {...state, loading: payload }
            }
        default:
            return state
    }
}