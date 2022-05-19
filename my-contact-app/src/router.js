import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ContactInfo from './contact_info/contact_info';
import ContactList from './contact_list/contact_list';

export default function Router(){
    return (
    <BrowserRouter>
        <Routes>
            <Route path="/"  element={<ContactList />} />
            <Route path="/contact/:id"  element={<ContactInfo />} />
        </Routes>
    </BrowserRouter>
    )
}
