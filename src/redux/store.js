import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { apiReducer, fetchingApiReducer } from "./reducers";

export const rootReducer=combineReducers({
    api1:apiReducer,
    api2:fetchingApiReducer
})

export const store=createStore(rootReducer,applyMiddleware(thunk))