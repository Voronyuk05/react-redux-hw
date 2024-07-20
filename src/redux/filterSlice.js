import { createSlice } from "@reduxjs/toolkit";

const filtersInitialState  = {
    query: "",
    saved: 'all'
};

export const filterSlice = createSlice({
    name: 'filters',
    initialState: filtersInitialState,
    reducers: {
        changeFilter: (state, action) => {
            state.query = action.payload
        },
        changeSavedFilter: (state, action) => {
            state.saved = action.payload
        }
    },
})

export const {changeFilter, changeSavedFilter} = filterSlice.actions
export const filtersReducers = filterSlice.reducer