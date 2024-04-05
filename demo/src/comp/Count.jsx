import React, { useState } from 'react'

export default function Count() {
  const [count, setCount] = useState(0)
  const change = () => {
    // for (let i = 0; i < 5; i++) {
      // setCount(prev=>prev+1)
      if(count <10){
        setCount(count + 1);
      }
     
    
    // }

  }
  const decer = () => {
    if(count > 0){
      setCount(count - 1)
    }
      
  }
  return (
    <>
      <h1>Count - {count}</h1>
      <button onClick={change}>Inc</button>
      <button onClick={decer}>Dec </button>
    </>

  )
}
