import './App.css';
import React, {useEffect, useState} from 'react'

//https://jsonplaceholder.org/users
function App() {
 
  const [todo, setTodo] = useState({})
  const [todos, setTodos] = useState([])

  function handleToDos() {
    console.log("in handleTdod")
    console.log(todo)
    if(todo.id) {
     const mTodos = todos.map(p => p.id === todo.id ? {...p, text: todo.text} : p)
     setTodos(mTodos)
    } else {
      setTodos([...todos, {id: Date.now(), text:todo.text, isComplete: false}])
    }
    
    setTodo({})
  }

  function removeToDos(tid) {
    
    const fTodos = todos.filter(p => p.id !== tid)
    setTodos(fTodos)
  }

  function updateToDo(todo) {
    
    setTodo(todo)
  }
  function deleteToDo(todo) {
    
    setTodo(todo)
  }

  function handleCheck(tid) {
    console.log("handleCheck",tid)
    const uTodos = todos.map(p => p.id === tid ? {...p, isComplete: !p.isComplete} : p)
    setTodos(uTodos)
  }
  console.log(todos)
  return (
    <div >
      <input type='text' value={todo.text} onChange={e => setTodo({...todo, text: e.target.value})} /> 
      <button onClick={handleToDos}>Add</button>
      <ul>
      {
      
      todos.map((t) => {
        return <li key={t.id}>
          {t.text} 
          <input type='checkBox' checked={t.isComplete} onChange={()=>handleCheck(t.id)}/>
          <button onClick={() => removeToDos(t.id)}>Remove</button>
          <button onClick={() => updateToDo(t)}>Update</button>
        </li>
      })}
      </ul>
    
    </div>
  );
}

export default App;
