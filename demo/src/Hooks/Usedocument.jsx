import React, { useEffect } from 'react'

export default function Usedocument(count) {
 useEffect(()=>{
    document.title = `Document ${count}`
 })
}
