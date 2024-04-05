import React from 'react'

export default function TableCon(props) {
  return (
    <tr>
        <td>{props.id}</td>
        <td>{props.name}</td>
        <td>{props.married}</td>
    </tr>
  )
}
