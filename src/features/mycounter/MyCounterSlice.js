import { createSlice } from "@reduxjs/toolkit"


const initialCoinValue={
    coin: 0
}

export const coinCounterSlice = createSlice({
    name:'MyCoinCounterSlice',
    initialState: initialCoinValue,
    reducers: {
        increment: (state)=>{
            state.coin +=1;
        },
        decrement: (state)=>{
            state.coin -=1;
        }
    }
})

// action creators
export const {increment, decrement} = coinCounterSlice.actions

export const coinCounterReducer = coinCounterSlice.reducer

