import { configureStore } from "@reduxjs/toolkit"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk";
import { useSelector } from "react-redux";
import { combineReducers } from "redux"
import { authReducer } from "../reducers/auth.reducer";
import { quizReducer } from "../reducers/quiz.reducer";

// const devTools = process.env.NODE_ENV === 'production' ? applyMiddleware(thunk) : composeWithDevTools(applyMiddleware(thunk));

const rootReducer = combineReducers({
    auth: authReducer,
    quiz: quizReducer
});

export const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV === 'production' ? thunk : composeWithDevTools(thunk),
});

export const useAppSelector = useSelector;