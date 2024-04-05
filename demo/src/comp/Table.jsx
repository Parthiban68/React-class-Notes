import React from 'react'
import TableCon from './TableCon'

export default function Table() {
    let list = [{
        id:"1",
        name:"Shiva Sruthi",
        married : "love"
    },{
        id : "2",
        name :"santhosh",
        married : "love com arrange "
    },{
        id : "3",
        name : "jai krishna",
        married : "no"
    }]
  return (
    <>
    <table border={'2px'} >
        <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Married</th>
        </tr>
        {list.map(x => <TableCon id ={x.id} name={x.name} married={x.married}/>)}
    
    </table>
    
    </>
  )
}
