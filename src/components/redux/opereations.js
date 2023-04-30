import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL='https://644bc39617e2663b9df7bc08.mockapi.io'

export const fetchAsyncContacts = createAsyncThunk('@@fetch/contacts', async (_, {rejectWithValue}) => {
try {   const res = await axios('/contacts') 
console.log(res.data);
return res.data
} catch (error) {
    return rejectWithValue(error.message)
}})
  
