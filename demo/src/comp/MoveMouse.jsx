import React, { useEffect, useState } from 'react'

export default function MoveMouse() {
    const [x,setX] =useState()
    const [y,setY] =useState()

    const logposition =(e) =>{
        console.log("sdfhkuwhd");
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect (() =>{
        window.addEventListener('mousemove',logposition)
        return()=>{

            window.removeEventListener('mousemove',logposition)
        }
    } ,[])

  return (
    <div>
        mousemove
        x-{x} y-{y}
    </div>
  )
}
