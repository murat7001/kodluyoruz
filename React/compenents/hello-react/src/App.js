import './App.css';
import User from './compenents/User.js';
import Header from './compenents/Header.js';

const name ='Murat';
const isLoggin = true;

function App() {

  //return React.createElement('div',null,'hello');

  return (
    // <div className="App">
    // <Header/>
    // </div>

    // <>
    // <Header/>
    // <label htmlFor="myInput">
    //   Name
    //   <input id="myInput"></input>
    // </label>
    // </>

    // <>
    // <h1>{name}</h1>

    // <h1>{`benim adım ${name}`}</h1>

    // {isLoggin && <h1>{`benim adım ${name}`}</h1>}
    // {!isLoggin && <h1>{"giriş yapılmadı"}</h1>}

    // {isLoggin ? <h1>{`benim adım ${name}`}</h1> : <h1>{"giriş yapılmadı"}</h1>}
    // </>

    <>
      <User name ="Murat" surname="Yıldırım" isLogin ={true} age={21} friends={["ahmet", "gokhan", "cari","ayse"]} adress={{title:'Karaman', zip: 70000}}/>


    </>


  );
}

export default App;
