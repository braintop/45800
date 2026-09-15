import { configureStore } from '@reduxjs/toolkit' 
import counterReducer from '../slices/counterSlice'
import languageReducer from '../slices/languageSlice'
import movieReducer from '../slices/movieSlice'
import userReducer from '../slices/userSlice'
import cityReducer from '../slices/citySlice'
import user2Reducer from '../slices/userSlice2'
export const store = configureStore({
    reducer: {
        counter: counterReducer,
        language: languageReducer,
        movie: movieReducer,
        user: userReducer,
        city: cityReducer,
        user2: user2Reducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch