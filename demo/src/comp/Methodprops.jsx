import React from 'react'

export default function Methodprops(props) {
  return (
    <button onClick={()=>props.fn()}>click me</button>
  )
}
