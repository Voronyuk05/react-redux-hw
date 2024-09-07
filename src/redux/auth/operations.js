import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://66a4d8295dc27a3c1909f617.mockapi.io/contacts';
export const register = createAsyncThunk('auth/register', async (newUser, thunkAPI) => {
    try {
        const registerUser = await axios.post('/Users', newUser)
        return registerUser
    } catch (error) {
        thunkAPI.rejectWithValue('oops!')
    }
});

export const logIn = createAsyncThunk('auth/logIn', async (user, thunkAPI) => {
    try {
        const getUser = await axios.get(`/Users?password=${user.password}&email=${user.email}`)
        return getUser
    } catch (error) {
        thunkAPI.rejectWithValue('oops!')
    }
});
