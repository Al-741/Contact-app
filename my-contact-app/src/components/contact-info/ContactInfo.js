import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


export default function ContactInfo() {

  // useParems function from the react-router-dom library
  // can be used to retrieve parameters from the URL 
  // let { id } = useParams();

  // Definition of the state
  const [info, setInfo] = useState();

  // API calls is made as soon as the component is rendered
  useEffect(() => {
    fetch("/contacts/POST")
      .then(data => data.json())
      .then(data => {
        setInfo(data)
      })
  }, [])

  // Need to check if the state info already fetched successfully the data or not
  // Info is initially equals to null, when the data is fetched info value will be updated
  // Since it's a state, when its value changes the JSX below will be re-rendered
  if (info) {
    return (

      <div>
        <img src={info.image} />
        <ul>
          <li>Name: {info.name}</li>
          <li>LastName: {info.lastname}</li>
          <li>Number: {info.number}</li>
          <li>Email: {info.email}</li>
          <li>Job: {info.job}</li>
        </ul>
      </div>
    )
  }

  else {
    <p>Data is being fetched...</p>
  }


}