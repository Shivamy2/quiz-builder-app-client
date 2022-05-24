import { quizFetch, quizFetchError, quizFetchLoading, quizUpload, quizUploadError, quizUploadLoading } from "../actions/quiz.action";
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