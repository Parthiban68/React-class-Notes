import React from 'react'
import Usecounter from '../Hooks/Usecounter'

export default function Counter1() {
    const [count, inc, dec, res] = Usecounter(0,1)
  return (
    <div>
        {count}
        <button onClick={inc}>Increment</button>
        <button onClick={dec}>decrement</button>
        <button onClick={res}>Reset</button>
    </div>
  )
}
