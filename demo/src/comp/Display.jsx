import React from 'react'

function Display(props) {
    console.log(`Hello from ${props.name}`);
  return (
    <div>
        {props.name} --- {props.Display}
    </div>
  )
}

export default React.memo(Display)