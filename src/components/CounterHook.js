import React, { useState } from 'react'

export default function CounterHook() {
    const [count, setCount] = useState(0)
    return (
        <div>
            <h3>{count}</h3>
            <button
                onClick={() => setCount(count + 4)}>
                Increase
            </button>
        </div>
    )
}
