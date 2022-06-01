import { configureStore, createSlice } from '@reduxjs/toolkit';
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { connect, Provider } from 'react-redux'
import './index.css';
import PeopleList from './components/PeopleList';

const root = ReactDOM.createRoot(document.getElementById('root'));

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

function mapStateToProps(state) {
  return {
    contacts: state.contacts
  };
}

const addPerson = contactSlice.actions.addPerson;

const mapDispatchToProps = {
  addPerson
}

function AddPersonForm(props) {
  const [ person, setPerson ] = useState("");

  function handleChange(e) {
    setPerson(e.target.value);
  }

  function handleSubmit(e) {
    if(person !== "") {
      props.addPerson(person);
      setPerson('');
    }
    e.preventDefault();
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text"
        placeholder="Add new contact"
        onChange={handleChange}
        value={person} />
        <button type="submit">Add</button>
    </form>
  );
}


const store = configureStore({ reducer: contactSlice.reducer})
const DisplayedPeolpeList = connect(mapStateToProps)(PeopleList)
const Form = connect(null, mapDispatchToProps)(AddPersonForm)
const el = (
  <Provider store={store}>
    <Form />
    <DisplayedPeolpeList />
  </Provider>
)
root.render(el)
