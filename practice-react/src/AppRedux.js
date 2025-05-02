import './App.css';
import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { decrement, increment } from './redux/store';
function App() {
 
  const counter = useSelector(state => state.count)
  const dispatch = useDispatch()
  return (
    <div className="App">
      Counter: {counter}
      <button onClick={()=>dispatch(increment())}>Incr</button>
      <button onClick={()=>dispatch(decrement())}>Decre</button>
    </div>
  );
}

export default App;
