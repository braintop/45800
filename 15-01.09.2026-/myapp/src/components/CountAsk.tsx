import { useState } from "react";

export const CountAsk = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
            {count > 0 && <p>Count is {count}</p>}
        </div>
    );
};