import './App.css';
import React, {useState} from 'react'

function App() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  useState( () => {
    const fetchUsers = async () => {
      try {
        let resp = await fetch('https://jsonplaceholder.typicode.com/users')
        if(!resp.ok)
          throw new Error("error")
        setData(await resp.json())
       
      } catch(error) {
        console.error("Error",error)
        setError(true)
      } finally {
        setLoading(false)
      }
    }

    fetchUsers()
  }, [])

  // useState(() => {
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //   .then(res => {
  //     return res.json()
  //   }).then((data) => {
  //     setData(data)
  //     setLoading(false)
  //     throw error("blah")
  //   })
  //   .catch(err => {
  //     console.error("Error",err)
  //     setError(true)
  //   })
  // })
  if(loading) return <p>Loading...</p>
  if(error) return <p>Error...</p>
  return (
    <div className="App">
     <ul>
      {data.map((rec) => {
        return <li key={rec.id}>{rec.name}</li>
      })}
     </ul>
    </div>
  );
}

export default App;
