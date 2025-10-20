import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "../store";

interface CounterState {
    value: number
}

const initialState: CounterState = {
    value: 0
};

const counterSlice
    = createSlice({
    initialState: initialState,
    name: 'counter',
    reducers: {
        increment: (state: CounterState) => {state.value ++},
        decrement: (state: CounterState) => {state.value--},
    }
});


export const counterReducer
    = counterSlice.reducer;
export const {increment, decrement}
    = counterSlice.actions
export const selectCount
    = (state: RootState) => state.counter.value;