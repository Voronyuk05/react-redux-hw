import { createSlice } from "@reduxjs/toolkit";
import { getContacts, addContacts, deleteContacts, toggleContacts } from "./operations";

const contactsSlice = createSlice({
    name: "contacts",
    initialState: {
        items: [],
        isLoading: false,
        error: null
    },
    reducers: {
    },
    extraReducers: (builder) => {
        builder
        .addCase(getContacts.pending, (state) => {
            state.isLoading = true
        })
        .addCase(getContacts.fulfilled, (state, action) => {
            state.isLoading = false
            state.error = null
            state.items = action.payload
        })
        .addCase(getContacts.rejected, (state, action) => {
            state.error = action.payload
        })
        .addCase(addContacts.pending, (state) => {
            state.isLoading = true
        })
        .addCase(addContacts.fulfilled, (state, action) => {
            state.isLoading = false
            state.error = null
            state.items.push(action.payload.data)
        })
        .addCase(addContacts.rejected, (state, action) => {
            state.error = action.payload
        })
        .addCase(deleteContacts.pending, (state) => {
            state.isLoading = true
        })
        .addCase(deleteContacts.fulfilled, (state, action) => {
            state.isLoading = false
            state.error = null
            const idx = state.items.findIndex((item) => item.id === action.payload.id)
            console.log(idx);
            console.log(state.items.splice(idx, 1));
            
            state.items.filter(item => item.id !== action.payload.id);
        })
        .addCase(deleteContacts.rejected, (state, action) => {
            state.error = action.payload
        })
        .addCase(toggleContacts.pending, (state) => {
            state.isLoading = true
        })
        .addCase(toggleContacts.fulfilled, (state, action) => {
            state.isLoading = false
            state.error = null
            for (const contact of state.items) {
                if (contact.id === action.payload.data.id) {
                    contact.saved = !contact.saved;
                  break;
                }
            }
        })
        .addCase(toggleContacts.rejected, (state, action) => {
            state.error = action.payload
        })
    }
})

export const contactsReducers = contactsSlice.reducer