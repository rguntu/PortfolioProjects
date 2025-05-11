import './App.css';
import React, {useEffect, useState} from 'react'
const useDebounce1 = (query) => {
  const [dbQuery, setDbQuery] = useState('')
  useEffect(() => {

    const timer = setTimeout(() => {
      setDbQuery(query)
    }, 1000)
    return () => {clearTimeout(timer)}
  },[query])
  return dbQuery
}



function App() {
  const fruits = ["apple","banana"]
  const [val, setVal] = useState('')
  const [filterF, setFilterF] = useState(fruits)
  const dbQuery = useDebounce1(val)
  useEffect(() => {
    setFilterF(fruits.filter(p => p.includes(dbQuery)))
  }, [dbQuery])
  return (
    <div >
      <input type='text' value={val} onChange={(e) => setVal(e.target.value)}/>
      <ul>

            {

                filterF.map(p => {
                  return <li>
                    {p}
                  </li>
                })
            }
      </ul>
      
      
    </div>
  );
}

export default App;
