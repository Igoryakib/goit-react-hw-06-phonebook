import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import  reducers from "./reducers";


const rootReducer = combineReducers({
    contacts: reducers
})

const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV === 'development',
})

export default store;