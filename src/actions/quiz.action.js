import { QUIZ_UPLOAD, QUIZ_UPLOAD_ERROR, QUIZ_UPLOAD_LOADING } from "./action.constant";

export const quizUpload = (data) => ({
    type: QUIZ_UPLOAD,
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