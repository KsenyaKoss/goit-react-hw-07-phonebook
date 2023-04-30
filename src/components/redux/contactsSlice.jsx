import  { createSlice }  from "@reduxjs/toolkit"
import { deleteContact, fetchAsyncContacts } from "./opereations"



const initialState = {
    contacts: {
      items: [],
      isLoading: false,
      error: null
    },
    filter: ""
  }


  const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    extraReducers: {
        [fetchAsyncContacts.pending](state) {
            state.contacts.isLoading = true
        },
        [fetchAsyncContacts.fulfilled](state, action) {
            state.contacts.items = [...action.payload]
            state.contacts.isLoading = false
            state.contacts.error = null
        },
        [fetchAsyncContacts.rejected](state, action) {
            state.contacts.isLoading = false
            state.contacts.error = action.payload
        },
        [deleteContact.pending](state, action) {
            state.contacts.isLoading = true
        },
        [deleteContact.fulfilled](state, action) {
            const index = state.contacts.items.findIndex(item => item.id === action.payload)
            state.contacts.items.splice(index, 1)
            state.contacts.isLoading = false
            state.contacts.error = null
            
        },
        [deleteContact.rejected](state, action) {
            state.contacts.isLoading = false
            state.contacts.error = action.payload
        },
    }
  })

  export const contactsReducer = contactsSlice.reducer

