import  { createSlice }  from "@reduxjs/toolkit"
import { addContact, deleteContact, fetchAsyncContacts } from "./opereations"



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
    reducers: {
        setFilter(state, action){
            state.filter = action.payload
        }
    },
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
        [deleteContact.pending](state) {
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
        [addContact.pending](state) {
            state.contacts.isLoading = true
        },
        [addContact.fulfilled](state, action) {
            state.contacts.items.push(action.payload)
            state.contacts.isLoading = false
            state.contacts.error = null
        },
        [addContact.rejected](state, action) {
            state.contacts.isLoading = false
            state.contacts.error = action.payload
        },
    }
  })


  export const {setFilter} = contactsSlice.actions
  export const contactsReducer = contactsSlice.reducer

