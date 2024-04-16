import React, { useReducer } from 'react'

export default function Redobj() {
    const initialState = {
        firstcounter : 0,
        secondcounter : 0
    }
    const reducer = (state,action) =>{
        switch (action){
            case 'inc' :  return {...state,firstcounter:state.firstcounter + 1 }
            case 'dec' : return {...state,firstcounter:state.firstcounter - 1}
            case 'inc5' : return {...state,secondcounter:state.secondcounter + 5}
            case 'dec5' : return {...state,secondcounter:state.secondcounter - 5}
            case 'reset' : return initialState
            default:return state
        }
    }
    const [count,dispatch] = useReducer(reducer,initialState)
  return (
    <div>
        {count.firstcounter}
        <button onClick={()=>dispatch('inc')}>inc</button>
        <button onClick={() => dispatch('dec')}>dec</button>
        {count.secondcounter}
        <button onClick={()=>dispatch('inc5')}>inc5</button>
        <button onClick={()=>dispatch('dec5')}>dec5</button>
        <button onClick={()=>dispatch('reset')}>Clr</button>
    </div>
  )
}
