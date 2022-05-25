import { QUIZ_DELETE, QUIZ_DELETE_ERROR, QUIZ_DELETE_LOADING, QUIZ_FETCH, QUIZ_FETCH_ERROR, QUIZ_FETCH_LOADING, QUIZ_ONE, QUIZ_ONE_ERROR, QUIZ_ONE_LOADING, QUIZ_UPLOAD, QUIZ_UPLOAD_ERROR, QUIZ_UPLOAD_LOADING } from "./action.constant";

export const quizUpload = (data) => ({
    type: QUIZ_UPLOAD,
    payload: data
})

export const quizFetch = (data) => ({
    type: QUIZ_FETCH,
    payload: data
})

export const quizUploadLoading = (status) => ({
    type: QUIZ_UPLOAD_LOADING,
    payload: status
})

export const quizUploadError = (message) => ({
    type: QUIZ_UPLOAD_ERROR,
    payload: message
})


export const quizFetchLoading = (status) => ({
    type: QUIZ_FETCH_LOADING,
    payload: status
})

export const quizFetchError = (message) => ({
    type: QUIZ_FETCH_ERROR,
    payload: message
})

export const quizOneFetch = (data) => ({
    type: QUIZ_ONE,
    payload: data
})

export const quizOneError = (message) => ({
    type: QUIZ_ONE_ERROR,
    payload: message
});

export const quizOneLoading = (status) => ({
    type: QUIZ_ONE_LOADING,
    payload: status
})

export const quizDelete = (id) => ({
    type: QUIZ_DELETE,
    payload: id
})

export const quizDeleteLoading = (status) => ({
    type: QUIZ_DELETE_LOADING,
    payload: status
})

export const quizDeleteError = (message) => ({
    type: QUIZ_DELETE_ERROR,
    payload: message
})