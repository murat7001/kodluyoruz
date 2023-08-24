import {useState} from 'react'
// import {useEffect} from 'react';
import Counter from './compenents/Counter';

function App() {
  // const [number, setNumber] = useState(0);
  // const [name, setName] = useState('Murat');
  
  // useEffect(() => {
  //   console.log('compenent mount edildi!');
  // }, []);

  // useEffect(() => {
  //   console.log('Number State guncellendi');//istedigimiz state
  // }, [number]);

  // useEffect(() => {
  //   console.log('Number veya Name State guncellendi');//istedigimiz state
  // }, [number, name]);

  
  const [isVisible, setIsVisible] = useState(true)
  return (
    <div className="App">
      {/* <h1>{number}</h1>
      <button onClick={ () => (setNumber(number + 1))}>Increase</button>

      <hr />
      <br />

      <h1>{name}</h1>
      <button onClick={ () => (setName('Mehmet'))}>Change</button> */}
      {
        isVisible && <Counter/>
      }
      
      <button onClick={() => setIsVisible(!isVisible)}>Toggle</button>
    </div>
  );
}

export default App;
