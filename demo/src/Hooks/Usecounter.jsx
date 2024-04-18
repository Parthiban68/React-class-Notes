import React, { useState } from 'react'

export default function Usecounter(initialvalue,incvalue) {

    const [count, setCount] = useState(initialvalue)
    const handleinc = () =>{
        setCount(count + incvalue)
    }

    const handledec = () =>{
        if(count > 0){
            setCount(count - incvalue)
        }
        
    }

    const handlereset = () =>{
        setCount(initialvalue)
    }

    return [count,handleinc,handledec,handlereset]
}
