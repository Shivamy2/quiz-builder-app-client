import { QUIZ_DELETE, QUIZ_DELETE_ERROR, QUIZ_DELETE_LOADING, QUIZ_FETCH, QUIZ_FETCH_ERROR, QUIZ_FETCH_LOADING, QUIZ_ONE, QUIZ_ONE_ERROR, QUIZ_ONE_LOADING, QUIZ_UPLOAD, QUIZ_UPLOAD_ERROR, QUIZ_UPLOAD_LOADING } from "../actions/action.constant"

const initialValue = {
    data: [],
    currentQuiz: {},
    oneLoading: false,
    oneError: "",
    uploadLoading: false,
    uploadError: "",
    fetchLoading: false,
    fetchError: "",
    deleteError: "",
    deleteLoading: false,
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
        case QUIZ_ONE:
            {
                return {...state, currentQuiz: {...action.payload } }
            }
        case QUIZ_ONE_ERROR:
            {
                return {...state, oneError: action.payload }
            }
        case QUIZ_ONE_LOADING:
            {
                return {...state, oneLoading: action.payload }
            }
        case QUIZ_FETCH_LOADING:
            {
                return {...state, fetchLoading: action.payload }
            }
        case QUIZ_FETCH_ERROR:
            {
                return {...state, fetchError: action.payload }
            }

        case QUIZ_DELETE:
            {
                const id = action.payload;
                const prev = state.data.filter((item) => item._id !== id)
                return {...state, data: [...prev] }
            }

        case QUIZ_DELETE_LOADING:
            {
                return {...state, deleteLoading: action.payload }
            }
        case QUIZ_DELETE_ERROR:
            {
                return {...state, deleteError: action.payload }
            }
        default:
            return state;
    }
}