import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { apiReducer, authReducer, fetchingApiReducer } from "./reducers";

export const rootReducer=combineReducers({
    api1:apiReducer,
    api2:fetchingApiReducer,
    authenticate:authReducer
})

export const store=createStore(rootReducer,applyMiddleware(thunk))