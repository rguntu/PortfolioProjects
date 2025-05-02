import './App.css';
import React, {useEffect, useState} from 'react'

const CountDownTimer = ({tProp}) => {

  const [timer, setTimer] = useState(tProp)
  console.log(tProp)
  // useEffect(() => {
  //   setTimer(tProp)
  // }, [tProp])
 useEffect(() => {
  let currentTime = tProp;
  setTimer(currentTime)
  const intvl = setInterval(()=> {
    currentTime -= 1
    if(currentTime < 0) {
        clearInterval(intvl)
        setTimer(0)
        
    } else {
      setTimer(currentTime)
    }
  }, 1000)
   
  return () => clearInterval(intvl)
 }, [tProp] )

  return <div>
      <h2>Remaining secs: {timer} </h2>
  </div>
}

function App() {
  const [timer, setTimer] = useState(0)
  const [inputVal, setInputVal] = useState(timer)

  const updateTimer = (v) => { setTimer(v)
  }
  function bFunc(fn) {
    let t1;
    return function(...args) {
      clearTimeout(t1)
      t1 = setTimeout(()=> {
        fn.apply(this, args)
      }, 1000)
    }
  }
  const debouncedUpdate = bFunc(updateTimer)

  const handleDebounce = (e) => {
    setInputVal(e.target.value)
    debouncedUpdate(e.target.value);
  };
 
  return (
    <div className="App">
      <input value={inputVal} onChange={(e) => handleDebounce(e)}/>
      <CountDownTimer tProp={timer} />
    </div>
  );
}

export default App;
