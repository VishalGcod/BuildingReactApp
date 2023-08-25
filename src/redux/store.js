import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { apiReducer } from "./reducers";

export const store=createStore(apiReducer,applyMiddleware(thunk))