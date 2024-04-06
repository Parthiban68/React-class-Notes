import React, { useState } from 'react'

export default function
    () {

    const [name, setName] = useState({})
    // const [id,SetId] = useState()
    // const [job,setJob] = useState("fulltime")
    const [employee, setEmployee] = useState([])

    const handelchange = (e) => {
        setName({ ...name, [e.target.name]: e.target.value })
        // console.log(e.target.v`alue);
    }
    

    const handleClick = (e) => {
        e.preventDefault()
        setEmployee([...employee, name])
       
    }
    return (
        <>
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
        </>
    )
}
