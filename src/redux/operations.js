import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://66a4d8295dc27a3c1909f617.mockapi.io/contacts'
export const getContacts = createAsyncThunk('contacts/getContacts', async () => {
    try {
        const res = await axios.get('/contact')
        console.log(res);
        return res.data
    } catch(error) {
        console.log(error);
    }
})
export const addContacts = createAsyncThunk('contacts/addContacts', async (contact) => {
    try {
        const newContact = await axios.post('/contact', contact)
        return newContact
    } catch(error) {
        console.log(error);
    }
})

export const deleteContacts = createAsyncThunk('contacts/deleteContacts', async (contact) => {
    try {
        const deleteContact = await axios.delete(`/contact/${contact.id}`)
        return deleteContact
    } catch(error) {
        console.log(error);
    }
})

export const toggleContacts = createAsyncThunk('contacts/toggleContacts', async (contact) => {
    try {
        const toggleContact = await axios.put(`/contact/${contact.id}`, {saved: !contact.saved})
        console.log(toggleContact);
        return toggleContact
    } catch(error) {
        console.log(error);
    }
})