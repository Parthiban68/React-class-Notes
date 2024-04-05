import React, { useState } from 'react'

const State = () => {
    const [data,setData] = useState(true)
    const change = ()=>{
        setData(false)
    }

  return (
    <>
    <div>{data ? "jeni" : null}</div>
    <button onClick={change}>Change value</button>
    
    </>
  )
}

export default State