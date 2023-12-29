import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { coinCounterReducer  } from "../features/mycounter/MyCounterSlice";


const reducer = combineReducers([
    coinCounterReducer
])

export const store = configureStore({
    reducer:{
        coinCounterReducer:  coinCounterReducer
    }
})