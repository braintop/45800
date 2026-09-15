import { useSelector, useDispatch } from 'react-redux'
import type { RootState } from './store/store'
import { increment, decrement } from './slices/counterSlice'
export default function CounterPage() {

    const count = useSelector((state: RootState) => state.counter.value)
    const dispatch = useDispatch()
    const handleIncrement = () => {
        dispatch(increment())
    }
    const handleDecrement = () => {
        dispatch(decrement())
    }
    return (
        <div>
            <h1>Counter</h1>
            <p>Count: {count}</p>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
        </div>
    )
}