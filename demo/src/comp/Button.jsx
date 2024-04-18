import React from 'react'

function Button(props) {
    console.log(`Button click from ${props.name}`);
  return (
    <div>
        <button onClick={props.handleclick}>click me</button>
    </div>
  )
}

export default React.memo(Button)