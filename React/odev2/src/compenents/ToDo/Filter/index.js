import {useState} from 'react'
import './style.css'

function Filter({ lists, addToList }) {

  const [inputText, setInputText] = useState('');

  const handleKeyDown = (e) => {
    if (String(inputText).trim() === '') {
      return false
    }
    if (e.key === 'Enter') {
      const newItem = {
        inputText,
        id: Date.now(),
        isComplete: false,
        isEditing: false,
      };
      addToList([...lists, newItem])
      setInputText('');
    }
  }

  return (
    <section>
      <header className='filter'>
        <h1>toDo</h1>
        <div>
          <input placeholder="What needs to be done?" onKeyDown={handleKeyDown} value={inputText} onChange={(e) => setInputText(e.target.value)} autoFocus />
        </div>
      </header>
    </section>
  )
}

export default Filter