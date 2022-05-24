import { createSelector } from "reselect";
import { quizSelector } from "./app.selector";

export const quizDataSelector = createSelector(
    [quizSelector],
    (quiz) => quiz.data
);

export const quizFetchLoadingSelector = createSelector(
    [quizSelector],
    (quiz) => quiz.fetchLoading
);

export const quizFetchErrorSelector = createSelector(
    [quizSelector],
    (quiz) => quiz.fetchError
);

export const quizUploadErrorSelector = createSelector(
    [quizSelector],
    (quiz) => quiz.uploadError
);

export const quizUploadLoadingSelector = createSelector(
    [quizSelector],
    (quiz) => quiz.uploadLoading
);