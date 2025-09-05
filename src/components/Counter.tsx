import { useState } from "react"

export default function Counter() {
    const [count, setCount] = useState<number>(0)

    function handleIncrement(event: React.MouseEvent<HTMLButtonElement>) {
        setCount(prev => prev + 1)
    }

    function handleDecrement(event: React.MouseEvent<HTMLButtonElement>) {
        if (count > 0) {
setCount(prev => prev - 1)
        }
        
    }

    const handleReset = (callback: () => void) => {
        setCount(0)
        callback()
    }

    return (
        <div>
            <h2>{count}</h2>
            <button type="button" onClick={handleIncrement}>Increment</button>
            <button type="button" onClick={handleDecrement}>Decrement</button>
            <button type="button" onClick={() => handleReset(() => console.log("Counter reset!"))}>Reset</button>
        </div>
    )
}

