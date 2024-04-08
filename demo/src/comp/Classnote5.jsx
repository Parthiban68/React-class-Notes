import React, { useEffect, useState } from 'react'

export default function Classnote5() {
    const [count,setCount] = useState(0)
    const [intervalid, setIntervalid] = useState()
    useEffect (()=>{
        const interval = setInterval(()=>{
            setCount(prev => prev +1)
        },1000)
        setIntervalid(interval)
        return () =>{
            clearInterval(interval)
        }
    },[])
  return (
    <div>
        count - {count}
        <button onClick={()=>{clearInterval(intervalid)}}>stop</button>
    </div>
  )
}
