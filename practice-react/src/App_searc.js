import './App.css';
import React, {useEffect, useState} from 'react'

function App() {
 
  const [query, setQuery] = useState("")
  const [startQuery, setStartQuery] = useState("")
  const [data, setData] = useState([])

  useEffect(() => {
    const timer = setTimeout(() => {
      setStartQuery(query)
    }, 10000)
    return (() => clear(timer))
  }, [query])
  const performSearch = (startQuery) => {
    console.log("startQuery::",startQuery)
    fetch(`https://api.example.com/search?q=${startQuery}`)
    .then(res => res.json())
    .then(d1 => setData(d1))

  }

  const performSearch1 = () => {
    console.log("startQuery::",startQuery)
    fetch(`https://api.example.com/search?q=${query}`)
    .then(res => res.json())
    .then(d1 => setData(d1))

  }

  useEffect(() => {
    if(startQuery) {
      performSearch(startQuery)
    }
    
  }, [startQuery])
  
  return (
    <div className="App">
      <input value={query} onChange={e => setQuery(e.target.value)} placeholder='Query...'/>
      <button onClick={performSearch1}>Search</button>
      {
        data.map(d => {
          return <p> {d} </p>
        })
      }
    
    </div>
  );
}

export default App;
