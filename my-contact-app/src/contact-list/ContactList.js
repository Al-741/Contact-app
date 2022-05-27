import React, { useState, useEffect } from 'react'
import ContactItem from './ContactItem';
import { Link } from "react-router-dom";

export default function ContactList() {

    // Declaration of the component's state
    // Reminder: the difference between a regular variable
    // and a state is when states changes, the component is re-rendered
    // meaning the JSX (HTML) will be too
    const [contacts, setContacts] = useState({
        firstname: "Jean-loic",
        lastname: "De Jaeger",
        phone: "0606060606",
        email: "cc.cc@gmail.com",
        address: "Le Bourg, 24360 Étouars",
        dob: "01/01/2000",
        picture: "",
        job: "Programmeur",
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Reminder: the useEffect hook let us define piece of code that should be
    // executed at a specific moment of the component life-cycle
    // useEffect expects two paramters, one is a function (an anomymous function for better syntax)
    // and a list of variable/state that should trigger the execution of the function passed in the
    // first parameter.
    // If the second paramter is an empty list (like it's the case in the useEffect hook bellow),
    // annonymous function passed as the first parameter will be executed once the component is rendered
    // It's usually a good place to make API calls.

    useEffect(() => {
        fetch("http://127.0.0.1:5000/contacts", {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Access-Control-Allow-Credentials': 'true',
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            }
            })
            .then(response => {
                if (response.ok){
                    return response.json()
                }
                throw response;
            })
            .then(data => {
                setContacts(data);
            })
            .catch(error => {
              console.error("Error fetching data: ", error);
              setError(error);
            })
            .finally(() => {
                setLoading(false);
            })

    }, []);


    // Using an array.map() to map/transform a list of wine (data)
    // to a list of <li><Link to={route}><ContactItem data={wine}/></Link></li>
    // This usually how we display lists of items in a React application
    if (loading) return "Loading ...";
    if (error) return "Toujours pas 🤡";

    const items = contacts.map(user => {
        const id = user.id;
        const route = "/contacts/" + id;
        return (
            <li>
                <Link to={route}><ContactItem data={user} /></Link>
            </li>
        );
    });

    return (
        <div>
            <ul>
                {items}
            </ul>
        </div>
    )
}