import React from 'react'

function Hello(props) {
  return (
    <>
   
    <h2>Welcome {props.name} your age is {props.age}</h2>
    {props.children}
    </>
  )
}

export default Hello