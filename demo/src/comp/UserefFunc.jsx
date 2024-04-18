import React, { useEffect, useRef, useState } from 'react'

export default function UserefFunc() {
    const [count, SetCount] = useState(0)
    const refernce = useRef()

    useEffect(() => {

        refernce.current = setInterval(() => {
            SetCount(prev => prev + 1)
        }, 1000)
        return () => {
            clearInterval(refernce.current)
        }
    })


    return (
        <div>
            count --- {count}
            <button onClick={() => clearInterval(refernce.current)}>STOP</button>
        </div>
    )
}
