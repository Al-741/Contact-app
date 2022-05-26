import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactInfo from './contact-info/ContactInfo';
import ContactList from './contact-list/ContactList';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ContactList/>} />
        <Route path="/contacts/:id" element={<ContactInfo/>} />
      </Routes>
    </BrowserRouter>
  )
}