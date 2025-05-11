import './App.css';
import React, {useEffect, useState} from 'react'

//https://jsonplaceholder.org/users
function App() {
  const [data, setData] = useState([])
  const [val, setVal] = useState()
  const [fData, setFData] = useState([])

  useEffect(() => {
    if(val) {
      const timer1 = setTimeout(() => {
        setFData(data.filter(user => {
          return user.name.includes(val)
        }))
      }, 1000)
      return () => clearTimeout(timer1)
    } else {
      setFData(data)
    }
    
  }, [val])
  useEffect( () => {
    async function getData() {
      try {
        const resp = await fetch('https://jsonplaceholder.typicode.com/users')
        if(resp.ok) {
          const d1 = await resp.json()
          setData(d1)
          setFData(d1)
        }
      } catch(error) {
        console.log("error", error)
      }
    }
    getData()
   
  }, [])

  return (
    <div>

      <input type="text" value={val} onChange={(e) => setVal(e.target.value)} />
    <div style={{display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gridTemplateRows: "1fr 1fr",
      gridGap: "10px",
      marginTop: "6px"
    }}>
      {fData.map(user => {
        return <div>
          <p>{user.name}</p>
        </div>
      })}
    </div>
    </div>
  );
}

export default App;
