import {createSlice} from '@reduxjs/toolkit'

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0
    },
    reducers: {
        increment: (state: { value: number }) => {
            state.value += 1
        },
        decrement: (state: { value: number }) => {
            state.value -= 1
        },
        incrementBy5: (state: { value: number }) => {
            state.value += 5
    }
    }
})

export const { increment, decrement } = counterSlice.actions
export default counterSlice.reducer 