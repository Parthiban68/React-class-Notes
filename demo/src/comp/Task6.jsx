import React, { useState } from 'react'

export default function Task6() {
 const [show,setShow] = useState(true)
 const [name, setName] = useState({})
 const [employee, setEmployee] = useState([])

 const changecreate = ()=>{
    setShow(true)
 }
 const changeread = () =>{
    setShow(false)
 }

 const handelchange = (e) => {
     setName({ ...name, [e.target.name]: e.target.value })
 }
 

 const handleClick = (e) => {
     e.preventDefault()
     setEmployee([...employee, name])
     alert("succesfully stored in database")
    
 }


 if (show){
    return(
        <>
        <h1>Employee</h1>
        <div>
            <button>create</button>
            <button onClick={changeread}>read</button>
        </div>
        <form  >
                <label htmlFor="">Employee Id</label>
                <input type="text" name='id' onChange={(e) => handelchange(e)} /><br />
                <label htmlFor="">Name</label>
                <input type="text"name='name' onChange={(e) => handelchange(e)} /><br />
                <label htmlFor="">Job</label>
                <select name='job' onChange={(e) => handelchange(e)}>
                    <option value="">Select Job</option>
                    <option value="fulltime">FullTime</option>
                    <option value="Parttime">PartTime</option>
                </select><br />
                <button type='submit' onClick={handleClick}>Add Employee</button>
            </form>
        </>
        
    )
 }else{
    return(
        <>
        <h1>Employee</h1>
        <div>
            <button onClick={changecreate}>create</button>
            <button>read</button>

            <table>
                <thead>
                    <tr><th>Employee Id</th>
                        <th>Employee name</th>
                        <th>Employee job</th></tr>
                </thead>
                <tbody>
                    {employee.map((emp,index) => (
                        <tr key={index}>
                            <td>{emp.id}</td>
                            <td>{emp.name}</td>
                            <td>{emp.job}</td>

                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </>
    )
 }
}
