import React, { useState } from 'react'
import MoveMouse from './MoveMouse'

export default function Classnote3() {
    const [toggle,setToggle] = useState(true)
  return (
    <div>
        <button onClick={()=> {setToggle(!toggle)}}>Toggle</button>
        {toggle && <MoveMouse/>}
    </div>
  )
}
