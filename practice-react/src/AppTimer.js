import './App.css';
import React, {useEffect, useState} from 'react'

//https://jsonplaceholder.org/users
const CTimer = ({cData}) => {
  // console.log(cData)
  const [data, setData] = useState(cData)

  // useEffect(() => {
  //   setData(cData); // Sync when cData changes
  // }, [cData]);

  const f1 = () => {
    const ct = setInterval(()=>{
      setData(p => 
        {
          if(p > 0) {
            return p-1
          } else {
            clearInterval(ct)
            return 0
            
          }
        }
      )
      
      
    }, 1000)
    return  ct;
  }
   

  useEffect(() => {
    setData(cData);
    let  ct;
    const startCountDown = () => {
      ct = setInterval(()=>{
        setData(p => 
          {
            if(p > 0) {
              return p-1
            } else {
              clearInterval(ct)
              return 0
              
            }
          }
        )
        
        
      }, 1000)
    }
    let tim1;
    tim1 = setTimeout(() => {
     
      startCountDown()
    }, 3000)
    return () => {
      clearInterval(ct)
      clearTimeout(tim1) }
  },[cData])

  return <div>
    <p>{data}</p>
  </div>
}
function App() {
  const [data, setData] = useState(0)


  return (
    <div className="App">
      <input type='text' value={data} onChange={e => setData(e.target.value)}/>
      <CTimer cData={data} />
    </div>
  );
}

export default App;
