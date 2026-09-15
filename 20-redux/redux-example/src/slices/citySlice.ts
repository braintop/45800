import { createSlice, type PayloadAction } from "@reduxjs/toolkit";


const citySlice = createSlice({
    name: "city",
    initialState: {
        cityValue: ""
    },
    reducers: {
        changeCity: (state, action: PayloadAction<string>) => {
            state.cityValue = action.payload;
        }
    }
})


export const { changeCity } = citySlice.actions
export default citySlice.reducer