import React, { useEffect, useState } from 'react'

export default function Classnote2() {
    const [count, setCount] = useState(0)
    const [count1, setCount1] = useState(0)
    const [name, setName] = useState("")
    useEffect(() => {
        console.log("fgdfgfdg");
    }, [])

    return (
        <div>
            <button onClick={() => { setCount(count + 1) }}>clicked {count} times</button>
            <button onClick={() => { setCount1(count1 + 1) }}>click {count1} times</button>
            <input type="text" value={name} onChange={(e) => { setName(e.target.value) }} />
        </div>
    )
}
