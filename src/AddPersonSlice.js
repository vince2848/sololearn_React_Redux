import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    contacts: ["James Smith", "Thomas Anderson", "Bruce Wayne"]
};
  
const contactSlice = createSlice({
    name: 'ADD_PERSON',
    initialState: initialState,
    reducers: {
      addPerson(state, person) {state.contacts.push(person.payload)}
    },
})
  

export const { addPerson } = contactSlice.actions
export default contactSlice.reducer
