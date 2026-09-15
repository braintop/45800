import { createSlice } from "@reduxjs/toolkit";
 
const movieSlice = createSlice({
    name: 'movie',
    initialState: {
        selectedMovie: "" 
    },
    reducers: {
        selectSpiderman: (state) => {
            state.selectedMovie = 'Spiderman'
        },
        selectBatman: (state) => {
            state.selectedMovie = 'Batman'
        },
        selectSuperman: (state) => {
            state.selectedMovie = 'Superman'
        },
        resetMovie: (state) => {
            state.selectedMovie = "אין סרט נבחר";
        },
      
    }
})

export const { selectSpiderman, selectBatman, selectSuperman, resetMovie } = movieSlice.actions
export default movieSlice.reducer