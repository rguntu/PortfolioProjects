"use client";

import React from 'react'
import {useState} from "react"

export const Counter = () => {
    console.log("Counter Comp")
    const [count, setCount] = useState(0)
  return (
   
    <button onClick={() => setCount(count +1)}>
        clicked {count} times
    </button>
  )
}
