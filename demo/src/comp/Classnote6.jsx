import React, { useEffect, useState } from 'react'

export default function Classnote6() {
    const [time, setTime] = useState(new Date())
    const [bro,setBro] = useState()
    const [you,setYou] = useState()

    useEffect (()=>{
        const interval = setInterval (()=>{
            setTime(new Date())
        },1000)
        return() =>{
            clearInterval(interval)
        }
    },[])

    useEffect (()=>{
        const timeString = time.toLocaleTimeString()
        if(timeString === "12:21:00 PM")
        setBro("Bharath Raj Kumar is the one and only brother of Rathika")
        if(timeString === "12:21:05 PM")
        setYou("Radhika is the only sister of Bharath Raj Kumar in the entier universe ")
    })
    
  return (
    <div>
        <h1>{time.toLocaleTimeString()}</h1>
        <h1>{bro}</h1>
        <h1>{you}</h1>
    </div>
  )
}
