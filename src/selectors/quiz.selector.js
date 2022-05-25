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
export const quizFetchOneLoadingSelector = createSelector(
    [quizSelector],
    (quiz) => quiz.oneLoading
);
export const quizErrorOneSelector = createSelector(
    [quizSelector],
    (quiz) => quiz.oneError
);
export const quizFetchOneSelector = createSelector(
    [quizSelector],
    (quiz) => quiz.currentQuiz
);
export const quizDeleteLoadingSelector = createSelector(
    [quizSelector],
    (quiz) => quiz.deleteLoading
);
export const quizDeleteErrorSelector = createSelector(
    [quizSelector],
    (quiz) => quiz.deleteError
);