import { configureStore, combineReducers } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import { contactsReducers } from './contactsSlice'
import { filtersReducers } from './filterSlice'

const reducers = combineReducers({
    contacts: contactsReducers,
    filter: filtersReducers
})

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
    reducer: persistedReducer,

})

export const persistor = persistStore(store)