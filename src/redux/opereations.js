import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL='https://644bc39617e2663b9df7bc08.mockapi.io'

export const fetchAsyncContacts = createAsyncThunk('@@fetch/contacts', async (_, {rejectWithValue}) => {
try {   const res = await axios('/contacts') 
return res.data
} catch (error) {
    return rejectWithValue(error.message)
}})
  

export const deleteContact = createAsyncThunk('@@delete/contact', async (id, {rejectWithValue}) => {
    try {
       await axios.delete(`/contacts/${id}`)
        return(id)
    } catch (error) {
        return rejectWithValue(error.message)
    }

}
)

export const addContact = createAsyncThunk('@@add/contact', async ({name, phone}, {rejectWithValue}) =>{
    try {
        const res = await axios.post('/contacts', {name, phone})
        return res.data
    } catch (error) {
        return rejectWithValue(error.message)
    }
})