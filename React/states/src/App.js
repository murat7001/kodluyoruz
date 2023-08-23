import {useState} from "react"


function App() {
  const [name, setName] = useState('Murat');
  const [age, setAge] = useState(21);
  const [friends, setFriends] = useState(["ahmet", "murat"]);
  const [adress, setAdress] = useState({ title: 'Istanbul', zip: 34759});

  return (
    <div className="App">
      <h1>Merhaba {name}!</h1>
      <h1>Age: {age}</h1>
      <button onClick={() => {
        setName('Ali');
        setAge(22);
      }}>Click</button>
      
      <hr />
      <br />

      <h2>Friends</h2>
      {friends.map((friend, index) => (
        <div key={index} >
          {friend}
        </div>
      ))}
      
      <br />
      <br />

    <button onClick={() => {
        setFriends(friends.concat("Ayşe"))
      }}>Add Friend</button>
    
    <hr />
    <br />
    

      <h2>Adress</h2>
      <div>{adress.title} {adress.zip}</div>
      
      <br />

      <button onClick={() => {
        setAdress({...adress, title:'Ankara'})
      }}>Change Adress</button>




    </div>
    
  );
}

export default App;
