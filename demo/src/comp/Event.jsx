import React from 'react'
import Methodprops from './Methodprops';

export default function Event() {
    function what(){
        console.log(" a");
    }
  return (
    <>
    <Methodprops fn={what}/>
    </>
  )
}
