import React, { useCallback, useState } from 'react'
import Title from './Title'
import Display from './Display'
import Button from './Button'
// import {Title, Display, Button} from './comp'

function Parent() {
    const [age, setAge] = useState(25)
    const [salary,setSalary] = useState(25000)

    const handleage = useCallback(()=>{
        setAge(age + 1)
    },[age])

    const handlesalary = useCallback(()=>{
        setSalary(salary + 1000)
    },[salary])
  return (
    <div>
        <Title/>
        <Display name="age" Display={age}/>
        <Button name="age"  handleclick ={handleage}/> 
        <Display name='salary' Display={salary}/>
        <Button name="salary"  handleclick ={handlesalary}/> 
    </div>
  )
}

export default Parent