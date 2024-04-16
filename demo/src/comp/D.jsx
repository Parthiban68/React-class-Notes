import React, { useContext } from 'react'
import { counterContext } from '../App'

export default function () {
    const counter = useContext(counterContext)
  return (
    <div>D
        <button onClick={()=> counter.dispatch('inc')}>+</button>
    </div>
  )
}
