import { useState } from 'react'
export default function Toggle() {
  const [isOn, setIsOn] = useState(false) // return [ ,]
  function toggle() {
    setIsOn(!isOn)
  }
  return (
    <div>
      <h1>Toggle</h1>
      <button onClick={toggle}>{isOn ? 'On' : 'Off'}</button>
      <p>The light is {isOn ? 'on' : 'off'}</p>
    </div>
  )
}