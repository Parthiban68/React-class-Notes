import React, { useState } from 'react'

export default function Task7() {
    const [count,setCount] = useState(0)
    const [start, setStart] = useState("Start")
  return (
    <div>
        <button onClick={()=>{setStart}}></button>
    </div>
  )
}
