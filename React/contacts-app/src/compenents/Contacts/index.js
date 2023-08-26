import {useState, useEffect} from 'react'
import List from './List';
import Form from './Form';
import './style.css'


function Contacts() {
    const [contacts, setContacts] = useState([
      {
        fullname:'Murat',
        phone_number:'123123'
      },{
        fullname:'Ayşe',
        phone_number:'321321'
      },{
        fullname:'Mehmet',
        phone_number:'213213'
      }
    ]);

    useEffect(() => {
        console.log(contacts)
    },[contacts]);




  return (
    <div id='container'>
        <List contacts= {contacts}/>
        <Form addContact={setContacts} contacts={contacts}/>
    </div>
  )
}

export default Contacts;