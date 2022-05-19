import React from 'react' ;
import { BrowserRouter, Routes, Route } from "react-router-dom" ;

export default function Router(){
    return (
        <BrowserRouter> 
            <Route> 
                <Route path="/" element={<ContactList/>} />
                <Route path="/info" element={<ContactInfo/>} />
            </Route>
        </BrowserRouter>
    )
}