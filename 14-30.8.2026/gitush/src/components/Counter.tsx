import { useState } from 'react'
interface CounterProps {
  c: number,
  firstname: string,
}
export default function Counter(props: CounterProps) {
  //phase 1 
  const [count, setCount] = useState(props.c)
  //phase 2
  function f1() {
    setCount(count + 1)
  } 
  //phase 3
  function f2() {
    //setCount(count - 1)
    setCount((prev) => prev - 1)
  }
  return (
    <div>
      <h1>Counter : props.c belong to {props.firstname}</h1>
      <button onClick={f1}>Increment</button>
      <button onClick={f2}>Decrement</button>
      
      <p>Count: {count}</p> 
    </div>
  )
}