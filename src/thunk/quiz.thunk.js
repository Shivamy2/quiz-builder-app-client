import { quizDelete, quizDeleteError, quizDeleteLoading, quizFetch, quizFetchError, quizFetchLoading, quizOneError, quizOneFetch, quizOneLoading, quizUpload, quizUploadError, quizUploadLoading } from "../actions/quiz.action";
import httpService from "../services/httpService";

export const uploadQuiz = (data) => {
    return async dispath => {
        try {
            dispath(quizUploadError(""));
            dispath(quizUploadLoading(true));
            const response = await httpService.post('/quiz', data);
            dispath(quizUpload(response.data));
            dispath(quizUploadLoading(false));
        } catch (error) {
            dispath(quizUploadError("Error Occured!!"));
            dispath(quizUploadLoading(false));
        }
    }
}

export const fetchQuiz = () => {
    return async dispath => {
        try {
            dispath(quizFetchError(""));
            dispath(quizFetchLoading(true));
            const response = await httpService.get('/quiz');
            dispath(quizFetch(response.data));
            dispath(quizFetchLoading(false));
        } catch (error) {
            dispath(quizFetchError("Error Occured!!"));
            dispath(quizFetchLoading(false));
        }
    }
}

export const fetchOneQuiz = (id) => {
    return async dispath => {
        try {
            dispath(quizOneError(""));
            dispath(quizOneLoading(true));
            const response = await httpService.get(`/quiz/${id}`);
            dispath(quizOneFetch(response.data));
            dispath(quizOneLoading(false));
        } catch (error) {
            dispath(quizOneError("Error Occured!!"));
            dispath(quizOneLoading(false));
        }
    }
}

export const deleteQuiz = (id) => {
    return async dispath => {
        try {
            dispath(quizDeleteError(""));
            dispath(quizDeleteLoading(true));
            await httpService.delete(`/quiz/${id}`);
            dispath(quizDelete(id));
            dispath(quizDeleteLoading(false));
        } catch (error) {
            dispath(quizDeleteError("Error Occured!!"));
            dispath(quizDeleteLoading(false));
        }
    }
}