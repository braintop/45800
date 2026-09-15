import { createSlice, type PayloadAction } from "@reduxjs/toolkit";



const userSlice = createSlice({
  name: "user",
  initialState: {
    firstname: "",
    lastname: "" 
},

  reducers: {
    changeFirstname: (state, action: PayloadAction<string>) => {
      state.firstname = action.payload;
    },
    changeLastname: (state, action: PayloadAction<string>) => {
        state.lastname = action.payload;
    }
  }
})

export const { changeFirstname, changeLastname } = userSlice.actions
export default userSlice.reducer