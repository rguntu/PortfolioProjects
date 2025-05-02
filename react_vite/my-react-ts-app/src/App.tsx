
import './App.css'
import { Todo } from './types'
import { useState } from 'react'
function App() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [newTodo, setNewTodo] = useState<string>('')
 const [isChecked, toggleCheck] = useState<boolean>(false)
  const addTodo = () => {
    const todo: Todo = {
        id: Date.now(),
        text: newTodo,
        completed: false
    }
    setTodos([...todos, todo])
    setNewTodo("")

  }
  const handleCheck = (checked: boolean, todo: Todo) => {
    toggleCheck(checked)
    if(checked) {
      const updatedTodo: Todo = { ...todo, completed: true };
      //setTodos(pTodos => pTodos.map(todo => todo.id === updatedTodo.id ? updatedTodo : todo ))
      setTodos(pTodos => [...pTodos.filter(p => p.id !== updatedTodo.id), updatedTodo])
    }
  }
  return (
    <>
      <input type='text' value={newTodo} onChange={e => setNewTodo(e.target.value)}/> 
      <button onClick={addTodo}>Add</button>
      
        <ul>
            {todos.map(todo => (
              <div style={{display: 'flex', gap:'8px', alignItems: 'center'}}>
               <li key={todo.id}>
               {/* {todo.text} */}
                <span style={{textDecoration: todo.completed ? 'line-through' : 'none'}}>{todo.text}</span>
                
                
               <input type='checkbox' checked={isChecked} onChange={(e) => handleCheck(e.target.checked, todo)}/></li> 

               
              </div>
                
            )
          )}
        </ul>
      
      
    </>
  )
}

export default App
