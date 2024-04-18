import React from 'react'
import Usecounter from '../Hooks/Usecounter'

export default function Counter2() {
    const [count, inc, dec, res] = Usecounter(0,2000000000)
  return (
    <div>
        {count}
        <button onClick={inc}>Increment</button>
        <button onClick={dec}>decrement</button>
        <button onClick={res}>Reset</button>
    </div>
  )
}