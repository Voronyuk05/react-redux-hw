import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { contactsReducers } from './contactsSlice'
import { filtersReducers } from './filterSlice'
import { authReducer } from './auth/authSlice'

const reducers = combineReducers({
    contacts: contactsReducers,
    filter: filtersReducers,
    auth: authReducer
})


export const store = configureStore({
    reducer: reducers,
})

