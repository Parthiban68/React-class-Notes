import React, { useState } from 'react'

export default function Task3() {
    const [inr,setInr] = useState("inr")
    const [usd,setUsd] = useState("inr")
    const [input1,setInput1]=useState("")
    const [input2,setInput2]=useState("")

   let obj = {
    inr_to_usd:0.012,
    inr_to_inr:1,
    usd_to_usd:1,
    usd_to_inr:82.35
   }

    function handleChange(e){
        let value = e.target.value
        setInput1(value)
        setInput2(obj[`${inr}_to_${usd}`] * value)
    }
    function handleChange_1(e){
        let value = e.target.value
        setInput2(value)
        setInput1(  value * obj[`${usd}_to_${inr}`] )
    }


  return (
    <>
    {/* <label>inr</label> */}
    <select onChange={(e)=>{setInr(e.target.value)}} >
        <option value={"inr"} >Inr</option>
        <option value={"usd"} >usd</option>
    </select>
    <input type="number" value={input1} onChange={(e)=>handleChange(e)}  /> <br />
    {/* <label>usd</label> */}
    <select onChange={(e)=>{setUsd(e.target.value)}} >
        <option value={"inr"} >Inr</option>
        <option value={"usd"} >usd</option>
    </select>
    <input type="number" value={input2} onChange={(e)=>handleChange_1(e)}/>
    </>
  )
}
