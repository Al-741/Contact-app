import React, { useState, useEffect } from 'react'
import ContactItem from './ContactItem';
import { Link } from "react-router-dom";

export default function ContactList() {

    
    // Declaration of the component's state
    // Reminder: the difference between a regular variable
    // and a state is when states changes, the component is re-rendered
    // meaning the JSX (HTML) will be too
    const [contacts, setContacts] = useState([]);

    // Reminder: the useEffect hook let us define piece of code that should be
    // executed at a specific moment of the component life-cycle
    // useEffect expects two paramters, one is a function (an anomymous function for better syntax)
    // and a list of variable/state that should trigger the execution of the function passed in the
    // first parameter.
    // If the second paramter is an empty list (like it's the case in the useEffect hook bellow),
    // annonymous function passed as the first parameter will be executed once the component is rendered
    // It's usually a good place to make API calls.
    useEffect(() => {
        fetch("/contacts")
            .then(data => data.json())
            .then(data => setContacts(data));
    }, []);


    // Using an array.map() to map/transform a list of wine (data)
    // to a list of <li><Link to={route}><ContactItem data={wine}/></Link></li>
    // This usually how we display lists of items in a React application
    const items = contacts.map(contact => {
        const id = contact.id;
        const route = "/contacts/" + id;
        return (
            <li>
                <Link to={route}><ContactItem data={contact} /></Link>
            </li>
        );
    });

    if (contacts.length > 0) {
        return (
            <div>
                <ul>
                    {/* Reminder: {} (brackets) are used
                    to include data in the JSX */}
                    {items}
                </ul>
            </div>
        )
    }

    else {
        <p>Conversation are being fetched...</p>
    }
}