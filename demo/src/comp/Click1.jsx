import React, { useState } from 'react'
import Usedocument from '../Hooks/Usedocument'

export default function Click1() {
    const [count,setCount] = useState(0)
    Usedocument(count)
  return (
    <div>
        <button onClick={ ()=>{setCount(count+1)}}>click Me</button>
    </div>
  )
}
