import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

const arr = ["A", "B", "C"]
function MyList(props) {
  const arr = props.data;
  const listItems = arr.map((val) => <li>{val}</li>);
  return <ul>{listItems}</ul>;
}


const el =<MyList data={arr} />
root.render(el)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
