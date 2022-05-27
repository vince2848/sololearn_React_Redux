import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { connect, Provider } from 'react-redux'
import { createStore } from 'redux';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

const initialState = {
  contacts: ["James Smith", "Thomas Anderson", "Bruce Wayne"]
};

function addPerson(person) {
  return {
    type: 'ADD_PERSON',
    data: person
  }
};

function reducer(state = initialState, action) {
  switch(action.type) {
    case "ADD_PERSON":
      return {...state,
        contacts: [...state.contacts, action.data]};
    default:
      return state;
  }
}

function mapStateToProps(state) {
  return {
    contacts: state.contacts
  };
}

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

function PeopleList(props) {
  const arr = props.contacts;
  const listItems = arr.map((val, index) =>
  <li key={index}>{val}</li>
  );

  return <ul>{listItems}</ul>;
}

const store = createStore(reducer)
const DisplayedPeolpeList = connect(mapStateToProps)(PeopleList)
const Form = connect(null, mapDispatchToProps)(AddPersonForm)
const el = (
  <Provider store={store}>
    <Form />
    <DisplayedPeolpeList />
  </Provider>
)
root.render(el)
