import { configureStore } from '@reduxjs/toolkit';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'
import './index.css';
import PeopleList from './components/PeopleList';
import AddPersonSlice from './AddPersonSlice';
import AddPersonForm from './components/AddPersonForm';

const root = ReactDOM.createRoot(document.getElementById('root'));


const store = configureStore({ reducer: AddPersonSlice})
const el = (
  <Provider store={store}>
    <AddPersonForm />
    <PeopleList />
  </Provider>
)
root.render(el)
