//()=>setCount(count+1)
import { useState } from 'react';
export default function Counter2() {

    const [count, setCount] = useState(0);

    return (
        <div style={{ border: '1px solid pink', padding: '10px', margin: '10px' }}>
            <h1>Counter2 Component</h1>
            <p>Count: {count}</p>
            <button onClick={()=>setCount(count+1)}>Increment</button>
            <button onClick={()=>setCount(count-1)}>Decrement</button>
            <button onClick={()=>setCount(0)}>Reset</button>
        </div>
    )
}