import {useState} from 'react'

function InputExample() {

    const [name, setName] = useState('Murat');

  return (
    <div>
        Please enter a name
        <br />
        <input value={name} onChange={(e) => setName(e.target.value)} />
    </div>
  )
}

export default InputExample