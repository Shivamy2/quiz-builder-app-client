import { QUIZ_UPLOAD, QUIZ_UPLOAD_ERROR, QUIZ_UPLOAD_LOADING } from "../actions/action.constant"

const initialValue = {
    data: [],
    uploadLoading: false,
    uploadError: ""
}

export const quizReducer = (state = initialValue, action) => {
    switch (action.type) {
        case QUIZ_UPLOAD:
            {
                return {...state, data: action.payload }
            }
        case QUIZ_UPLOAD_ERROR:
            {
                return {...state, uploadError: action.payload }
            }
        case QUIZ_UPLOAD_LOADING:
            {
                return {...state, uploadLoading: action.payload }
            }
        default:
            return state;
    }
}