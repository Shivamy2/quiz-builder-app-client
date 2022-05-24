import { QUIZ_DATA, QUIZ_FETCH, QUIZ_FETCH_ERROR, QUIZ_FETCH_LOADING, QUIZ_UPLOAD, QUIZ_UPLOAD_ERROR, QUIZ_UPLOAD_LOADING } from "../actions/action.constant"

const initialValue = {
    data: [],
    uploadLoading: false,
    uploadError: "",
    fetchLoading: false,
    fetchError: ""
}

export const quizReducer = (state = initialValue, action) => {
    switch (action.type) {
        case QUIZ_UPLOAD:
            {
                const data = action.payload;
                return {...state, data: [...state.data, ...data] }
            }
        case QUIZ_FETCH:
            {
                const data = action.payload;
                return {...state, data: data }
            }
        case QUIZ_UPLOAD_ERROR:
            {
                return {...state, uploadError: action.payload }
            }
        case QUIZ_UPLOAD_LOADING:
            {
                return {...state, uploadLoading: action.payload }
            }
        case QUIZ_FETCH_LOADING:
            {
                return {...state, fetchLoading: action.payload }
            }
        case QUIZ_FETCH_ERROR:
            {
                return {...state, fetchError: action.payload }
            }
        default:
            return state;
    }
}