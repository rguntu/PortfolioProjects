import './App.css';
import React, {useEffect, useState} from 'react'

//https://jsonplaceholder.org/users
function App() {
  const [data, setData] = useState([])

  useEffect( () => {
    async function getData() {
      try {
        const resp = await fetch('https://jsonplaceholder.org/users')
        if(resp.ok) {
          setData(await resp.json())
        }
      } catch(error) {
        console.log("error")
      }
    }
    getData()
   
  }, [])

  return (
    <div className="App">
      {data.map(user => {
        <div>
          <p>{user.name}</p>
        </div>
      })}
    </div>
  );
}

export default App;
