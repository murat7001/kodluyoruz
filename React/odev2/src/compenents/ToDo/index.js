import { useState } from 'react'
import List from './List/index.js'
import Filter from './Filter/index.js'

function ToDo() {
  const [lists, setLists] = useState([])
  return (
    <div className='container'>
      <Filter lists={lists} addToList={setLists}  />
      <List lists={lists} addToList={setLists} />
    </div>
  )
}

export default ToDo
