import { useState } from "react";
import './style.css'

function List({ lists, addToList }) {
    const [filter, setFilter] = useState('all');

    const completeItem = (id) => {
        addToList(
            lists.map((list) =>
                list.id === id ? { ...list, isComplete: !list.isComplete } : list
            )
        );
    };


    const delItem = (id) => {
        addToList(lists.filter((list) => list.id !== id));
    }

    

    const filtered = lists.filter((list) => {
        if(filter === 'all'){
            return true;
        }else if(filter === 'completed'){
            return list.isComplete
        }else{
            return !list.isComplete
        }
    })

    const deleteCompleted = () => {
        const arr = [];
        lists.forEach((list) => {
            if (!list.isComplete) {
              arr.push(list);
            }
          });
          addToList(arr);
    }

    return (
        <div className="list">
            <div>
                <ul className="list-item">
                    {
                        filtered.map((item) => (
                            <li className="item" key={item.id} style={{
                                textDecoration: item.isComplete ? "line-through" : "none",
                            }}>
                                <span>
                                <input type="checkbox" onClick={() => completeItem(item.id)} />
                                <label>{item.inputText}</label>
                                </span>
                                <button onClick={() => delItem(item.id)}>X</button>
                            </li>
                        ))
                    }
                </ul>
            </div>

            <div className="buttons">
                <div>
                    {lists.length} todo
                </div>

                <div>
                    <button onClick={() => setFilter('all')}>All</button>
                    <button onClick={() => setFilter('active')} >Active</button>
                    <button onClick={() => setFilter('completed')} >Completed</button>
                </div>

                <div>
                    <button onClick={deleteCompleted} >Clear completed</button>
                </div>
            </div>
        </div>
    )
}

export default List