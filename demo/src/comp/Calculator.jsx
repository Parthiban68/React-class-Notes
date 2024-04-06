import React, { useState } from 'react'
import "./cal.css"

export default function Calculator() {
    const [input, setInput] = useState("");

    const handle = (value)=>{
        if(value === "="){
            setInput(eval(input))
        }
        else if(value === "cl"){
            setInput("")
        }
            else if(value === "bs"){
                setInput(input.toString().slice(0,-1))
            }
        else{
            setInput(input + value)
        }
    }
    return (
        <div className='one'>
            <div><input type="text" value={input} /></div>
            <div className='two'>
                <input type="button" value="1" onClick={()=>handle("1")}/>
                <input type="button" value="2" onClick={() =>handle("2")}/>
                <input type="button" value="3" onClick={() =>handle("3")}/>
                <input type="button" value="4" onClick={() =>handle("4")}/> <br />
                <input type="button" value="5" onClick={() =>handle("5")}/>
                <input type="button" value="6" onClick={() =>handle("6")}/>
                <input type="button" value="7" onClick={() =>handle("7")}/>
                <input type="button" value="8" onClick={() =>handle("8")}/> <br />
                <input type="button" value="9" onClick={() =>handle("9")}/>
                <input type="button" value="0" onClick={() =>handle("0")}/>
                <input type="button" value="+" onClick={() =>handle("+")}/>
                <input type="button" value="-" onClick={() =>handle("-")}/> <br />
                <input type="button" value="/" onClick={() =>handle("/")}/>
                <input type="button" value="*" onClick={() =>handle("*")}/>
                <input type="button" value="=" onClick={() =>handle("=")}/>
                <input type="button" value="cl" onClick={()=>handle("cl")} />
                <input type="button" className='abc' value="bs" onClick={()=>handle("bs")} />
                
            </div>
        </div>
    )
}
