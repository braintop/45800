import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface IUser{
    id: number;
    firstname:string;
    email:string;

}

const userSlice2 = createSlice({
    name: "user2",
    initialState: {
        users: [] as IUser[]
    },
    reducers: {
        addUser: (state, action: PayloadAction<IUser>) => {
            state.users.push(action.payload);
        },
        clearUsers: (state) => {
            state.users = [];
        },
        deleteUser: (state, action: PayloadAction<number>) => {
            state.users = state.users.filter(user => user.id !== action.payload);
        }
    }
})

export const { addUser, clearUsers, deleteUser } = userSlice2.actions
export default userSlice2.reducer