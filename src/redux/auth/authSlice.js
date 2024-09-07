import { createSlice } from "@reduxjs/toolkit";
import { register, logIn } from "./operations";

const handlePending = state => {
    state.isRefreshing = true;
};

const handleRejected = (state, action) => {
    state.user = { name: null, email: null, password: null}
    state.isLoggedIn = false
    state.isRefreshing = false
    console.log(state.user);
    
};

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: { name: null, email: null, password: null },
        token: null,
        isLoggedIn: false,
        isRefreshing: false,
    },
    reducers: {
        logOut: handleRejected
    },
    extraReducers: builder => {
        builder 
            .addCase(register.pending, handlePending)
            .addCase(logIn.pending, handlePending)
            .addCase(register.rejected, handleRejected)
            .addCase(logIn.rejected, handleRejected)
            .addCase(register.fulfilled, (state, action) => {
                state.user = action.payload.data
                state.isLoggedIn = true
                state.isRefreshing = false  
            })
            .addCase(logIn.fulfilled, (state, action) => {
                console.log(action.payload.data[0]);
                
                state.user = action.payload.data[0]
                state.isLoggedIn = true
                state.isRefreshing = false
            })
    }
})

export const {logOut} = authSlice.actions
export const authReducer = authSlice.reducer