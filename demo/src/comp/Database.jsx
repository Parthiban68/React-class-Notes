import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Database() {


const [id , setId] = useState()
const [name , setName] = useState()
const [list, setList] = useState()


    let url ="http://localhost:3002/Employee"

    useEffect(()=>{
        axios.get(url)
        .then((res)=>{
          setList(res.data)
        })
    })
    const handlesubmit = () =>{

    }

  return (
    <div>
        <h1>booking</h1>
        <div>
          <form onSubmit={handlesubmit}>
          <label>ID:</label>
            <input type="text" value={id} onChange={(e) => {setId(e.target.value)}} />
            <br /><br /><br />
            <label>NAME:</label>
            <input type="text" value={name} onChange={(e) => {setName(e.target.value)}} />
            <button type="submit">Add</button>
          </form>
        </div>
        <br />
        {list.map(x=>(
                <tr key={x.id}>
                  <td>{x.id}</td>
                  <td>{x.name}</td>
                </tr>
        ))}
    </div>

  )
}

export default Database