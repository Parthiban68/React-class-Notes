import React, { useState } from 'react'

export default function () {
    const [count, setCount] = useState(0)

    const change =()=>{
        if(count < 10){
            setCount(count+1)
        }
    }

    const reverse = ()=>{
        if(count > 0){
            setCount(count - 1)
        }
    }

        const reset =()=>{
            setCount(0)
        }
  return (
    <>
    <h1>Count - {count}</h1>
    <button onClick={change}>Incerment</button>
    <button onClick={reverse}>Decrement</button>
    <button onClick={reset}>Reset</button>
    </>
    
  )
}
