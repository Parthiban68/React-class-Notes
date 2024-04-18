import React from 'react'

function Title() {
    console.log("Title Page");
  return (
    <div>Welcom to the App</div>
  )
}

export default React.memo(Title)