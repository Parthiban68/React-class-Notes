import React from 'react'
import './style.css'

export default function External(props) {
    let x = props.admin? "primary" : "secondary" ;
  return (
    <h1 className={x}>Welcome</h1>
  )
}
