import React from 'react';
import ReactDOM from 'react-dom/client';
import { connect, Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { createStore } from 'redux';
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

const initialState = {
  count: 0
};

function incrementCounter(num) {
  return {
    type: 'INCREMENT',
    num: num
  }
};

function reducer(state = initialState, action) {
  switch(action.type) {
    case 'INCREMENT':
      return {count: state.count + action.num};
    default:
      return state;
  }
}

function mapStateToProps(state) {
  return {
    count: state.count
  };
}

const mapDispatchToProps = {
  incrementCounter
}

function Counter(props) {
  function handleClick() {
    props.incrementCounter(1);
  }

  return <div>
    <p>{props.count}</p>
    <button onClick={handleClick}>Increment</button>
  </div>;
}

const store = createStore(reducer);

const DisplayCounter = connect(mapStateToProps, mapDispatchToProps)(Counter)


const el =<Provider store={store}>
  <DisplayCounter />
</Provider>
root.render(el)



