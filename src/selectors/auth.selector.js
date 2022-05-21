import { createSelector } from "reselect";
import { authSelector } from "./app.selector";

export const userDataSelector = createSelector(
    [authSelector],
    (auth) => auth.data
)
export const userSignUpLoadingSelector = createSelector(
    [authSelector],
    (auth) => auth.loading
)
export const userSignUpErrorSelector = createSelector(
    [authSelector],
    (auth) => auth.error
)
export const userFetchErrorSelector = createSelector(
    [authSelector],
    (auth) => auth.fetchError
)
export const userFetchLoadingSelector = createSelector(
    [authSelector],
    (auth) => auth.fetchLoading
)

export const loginUserLoading = createSelector(
    [authSelector],
    (auth) => auth.loginLoading
)

export const loginUserError = createSelector(
    [authSelector],
    (auth) => auth.loginError
)