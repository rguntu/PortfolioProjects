import './App.css';
import React, {useState} from 'react'


function App() {
  const [todos, setTodos] = useState([])
  //const [todo,setTodo] = useState({ id: null, name: "" })
  const [todo,setTodo] = useState({})
  //const [update,setUpdate] = useState(false)
  return (
    <div className="App">
      <input value={todo.name} onChange={e => {
        setTodo({...todo, name:e.target.value})
      }}/>
      <button onClick={() => {
        if(todo.name.trim()) {
          console.log("todo", todo)
          if(todo.id) {
            let todosM = todos.filter(item => item.id !== todo.id)
            console.log("todosM", todosM)
            setTodos([...todosM, {id:todo.id, name:todo.name }])
          } else {
            setTodos([...todos, {id:Date.now(), name:todo.name }])
          }
         
          setTodo({})
        }
        
      }}>Submit</button>
      <ul>
      {todos.map(item => {
        console.log("item", item)
        return <li key={item.id}>

          {item.name}
          <button onClick={() => {
            console.log("item", item)
            setTodo(item)
            //setUpdate(true)
          }}>Update</button>
          <button onClick={() => {
            let todosM = todos.filter(itemd => {
              return itemd.id !== item.id
            })
            setTodos(todosM)
          }}>Delete</button>
        </li>
        })}
      </ul>
   
    </div>
  );
}

export default App;
