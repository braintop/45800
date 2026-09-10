import { useCounter } from "../hooks/useCounter";

export const CartButtons = () => {

    const { count, increment, decrement, reset } = useCounter();

  return <div>
        <h1>CartButtons</h1>
        <p>Count: {count}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>


  </div>;
};