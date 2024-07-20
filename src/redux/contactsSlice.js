import { createSlice } from "@reduxjs/toolkit";


const contactsInitialState = [
    { id: 0, name: "Daniil", tel: '+380 (11) 137-2993', saved: false, },
    { id: 1, name: "Ivan", tel: '+380 (54) 600-8907', saved: false },
    { id: 2, name: "Danny Lee", tel: '+380 (51) 704-8747', saved: false },
    { id: 3, name: "Billy", tel: '+380 (11) 137-2993', saved: false },
    { id: 4, name: "Bo sinn", tel: '+380 (96) 525-1689', saved: false },
]

const contactsSlice = createSlice({
    name: "contacts",
    initialState: contactsInitialState,
    reducers: {
        addContacts: (state, action) => {
            state.push(action.payload)
        },
        deleteContacts: (state, action) => {
            const index = state.findIndex(contact => contact.id === action.payload);
            state.splice(index, 1);
        },
        toggleSaved: (state, action) => {
            for (const contact of state) {
                if (contact.id === action.payload) {
                    contact.saved = !contact.saved;
                  break;
                }
            }
        },
    },
});

export const {addContacts, deleteContacts, toggleSaved} = contactsSlice.actions
export const contactsReducers = contactsSlice.reducer