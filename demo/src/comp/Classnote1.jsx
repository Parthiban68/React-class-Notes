import React, { useEffect, useState } from 'react'

export default function () {
    const [count,setCount] = useState(0)
    useEffect(()=>{
        console.log("compounjdfjsn");
    })
  return (
    <div>
        <button onClick={()=>{setCount(count+1)}}>add {count}</button>
    </div>
  )
}
