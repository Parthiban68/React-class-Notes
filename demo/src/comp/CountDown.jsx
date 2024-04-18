import React, { useEffect, useState } from 'react'
import './count.css'

export default function CountDown() {
  const [seconds, setSeconds] = useState(0)
  const [duration, setDuration] = useState(0)
  const [isRunning, setIsRunning] = useState(false)
  const [isTimercomplete, setIsTimercomplete] = useState(false)

  const handlechange = (e) => {
    setDuration(e.target.value)
    setSeconds(e.target.value)
  }
  useEffect(() => {
    let interval
    if (isRunning && seconds) {
      interval = setInterval(() => {
        setSeconds(prev => prev - 1)
      }, 1000)
    }
    else if (seconds === 0 && isRunning) {
      setIsTimercomplete(true)
      setIsRunning(false)
    }
    return () => {
      clearInterval(interval)
    }
  }, [isRunning, seconds])
  const progresswidth = (seconds / duration) * 100;
  return (
    <>
      {isTimercomplete ? (<h1>Spelling mistake queen Radhika &  Boomer Boomika</h1>) : 
      // (<p>count timer :{seconds}s</p>)
      (
        <div className='container'>
          <div className='progress' style={{width : progresswidth + "%"}}>
          </div>
        </div>
      )}
      <br />
      <input type="number" value={duration} onChange={handlechange} disabled={isRunning} />
      {isRunning ? (<button onClick={() => { setIsRunning(false) }}>Stop</button>) : (<button onClick={() => { setIsRunning(true) }}>Start</button>)}
      <button onClick={() => { setSeconds(duration); setIsTimercomplete(false) }}>Reset</button>
    </>
  )
}
