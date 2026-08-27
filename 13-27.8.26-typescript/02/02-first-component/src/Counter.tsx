import { useState } from 'react';
export default function Counter() {

    const [count, setCount] = useState(0);

    function incrementCount(): void {
        setCount(count + 1);
    }
  return (
    <div style={{ border: '1px solid black', padding: '10px', margin: '10px' }}>
      <h1>Counter Component</h1>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment</button>
    </div>
  )
}