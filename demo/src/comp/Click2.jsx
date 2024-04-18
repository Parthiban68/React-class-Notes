import React, { useState } from 'react'
import Usedocument from '../Hooks/Usedocument'

function Click2() {
    const [count,setCount] = useState(0)
    Usedocument(count)
  return (
    <div>
        <button onClick={ ()=>{setCount(count+1)}}>click Me 2</button>
    </div>
  )
}

export default Click2