import './App.css';
import React, {useEffect, useState} from 'react'

const useFetchCustom = (url) => {

  const [data, setData] = useState([])
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetch(url);
        if(!resp.ok) throw new Error(`error ${resp.status}`)
        const data = await resp.json();
        setData(data)
      } catch(error) {
        setError(error)
      } finally {
        setIsLoading(false)
      }
      
    }
    fetchData();
  }, [url])
  // useEffect(() => {
  //   const resp = fetch(url)
  //   .then((resp) => resp.json())
  //   .then(d => {
  //     setData(d)
  //     setIsLoading(false)
  //   })
  //   .catch(error => {
  //     console.log(error)
  //     setError(error)
  //     setIsLoading(false)
  //   })
  // }, [url])
 
return {data, error, isLoading}

}
 //https://jsonplaceholder.org/users
function App() {
  
  const {data, error, isLoading} = useFetchCustom('https://jsonplaceholder.typicode.com/users')
 if(isLoading) {
  return (
   
     <p>Loading...</p>
  
  )}
  if(error) {
    return (
     
       <p>{error}</p>
    
    );
 }
  return (
    <div className="App">
     <p>Hello</p>
     <ul>
     {data.map(d => {
      return <li key={d.name}>
        {d.name}
      </li>
     })
    }
     </ul>
    </div>
  );
}

export default App;
