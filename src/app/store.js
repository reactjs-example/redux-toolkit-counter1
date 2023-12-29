import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { coinCounterSlice } from "../features/mycounter/MyCounterSlice";


const reducer = combineReducers([
    coinCounterSlice.reducer
])

export const store = configureStore({
    reducer:{
        coinCounterReducer:  coinCounterSlice.reducer
    }
})