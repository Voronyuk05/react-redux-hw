import { configureStore, combineReducers } from '@reduxjs/toolkit'

import { contactsReducers } from './contactsSlice'
import { filtersReducers } from './filterSlice'

const reducers = combineReducers({
    contacts: contactsReducers,
    filter: filtersReducers
})


export const store = configureStore({
    reducer: reducers,
})

