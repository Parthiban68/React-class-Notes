import React, { useContext } from 'react'
import { counterContext } from '../App'

export default function F() {

    const counter = useContext(counterContext)
  return (
    <div>F
        <button onClick={()=> counter.dispatch('inc')}>+</button>
    </div>
  )
}
