import React,  {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom';
import styles from './contact.module.css';
import ContactItem from './ContactItem'


export default function ContactInfo() {
  let {id} = useParams();
  const [infos, setInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
      fetch("/contacts/"+id, {
          method: 'GET',
          headers: {
              accept: 'application/json'
          }
          })
          .then(response => {
              if (response.ok){
                  return response.json()
              }
              throw response;
          })
          .then(data => {
              setInfo(data);
          })
          .catch(error => {
              console.error("Error fetching data: ", error);
              setError(error);
          })
          .finally(() => {
              setLoading(false);
          })
  }, []);

  if (loading) return "Loading ...";
  if (error) return "Error!";

  const items = infos.map(user => {
    const id = user.id;
    const route = "/contacts/" + id;
    return (
        <li>
            <ContactItem data={user} />
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