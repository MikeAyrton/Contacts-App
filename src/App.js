import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import AddContact from './components/Contacts/AddContact/AddContact';
import ContactList from './components/Contacts/ContactList/ContactList';
import EditContact from './components/Contacts/EditContact/EditContact';
import ViewContact from './components/Contacts/ViewContact/ViewContact';
import NavBar from './components/NavBar/NavBar';

const App = () => {
  return (
    <React.Fragment>
      <NavBar />
      <Routes>
        <Route path={'/'} element={<Navigate to={'/contacts/list'} />} />
        <Route path={'/contacts/list'} element={<ContactList />} />
        <Route path={'/contacts/add'} element={<AddContact />} />
        <Route path={'/contacts/view/:contactId'} element={<ViewContact />} />
        <Route path={'/contacts/edit/:contactId'} element={<EditContact />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
