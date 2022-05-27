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
      fetch("http://127.0.0.1:5000/contacts/"+id, {
          method: 'GET',
          headers: {
              'Accept': 'application/json',
              'Access-Control-Allow-Credentials': 'true',
              'Access-Control-Allow-Origin': '*',
              'Content-Type': 'application/json'
          }
      })
          .then(r => {
              if (r.ok){
                  return r.json()
              }
              throw r;
          })
          .then(r => {
              setInfo(r);
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
  if (error) return "Toujours pas 🤡";

  const items = infos.map(user => {
    const id = user.id;
    const route = "/contacts/" + id;
    return (
        <div>
            <ContactItem data={user} />
        </div>
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