import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../slices/counterSlice'
import languageReducer from '../slices/languageSlice'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        language: languageReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch