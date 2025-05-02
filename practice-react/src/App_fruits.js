import './App.css';
import React, {useEffect, useState} from 'react'
const useDebounce = (val) => {
  const [dbVal, setDbVal] = useState('')
  useEffect(() => {
      const t1 = setTimeout(() => {
        setDbVal(val)
      }, 1000)
      return () => {
        clearTimeout(t1)
      }
  },[val])

  return dbVal
}

function App() {
  const [fruits, setFruits] = useState(['Apple', 'Banana', "Kiwi"])
  const [fruitInput, setFruitInput] = useState('')
  const dbText = useDebounce(fruitInput)

  useEffect(() => {
    console.log("dbText", dbText)
    setFruits(p => {
      return p.filter(p1 => p1.toLowerCase().includes(dbText))
    })
  },[dbText])
  const handleInput = (val) => {
    setFruitInput(val)
  }
  return (
    <div className="App">
      <input type='text' value={fruitInput} onChange={(e) => handleInput(e.target.value)}/>
      {fruits.map(fruit => (
        <p key={fruit}>{fruit}</p>
      ))}
    </div>
  );
}

export default App;
