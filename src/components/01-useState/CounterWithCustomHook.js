import React from 'react';
import { useCounter } from '../../hooks/useCounter';

import './counter.css';

export const CounterWithCustomHook = () => {
    const {state:counter, increment, decrement, reset}=useCounter(200);
    return (
        <>
        <h1>Counter with Hook {counter}</h1>
            <button onClick={() => increment(2)} className="btn">+</button>
            <button onClick={() => decrement(2)} className="btn">-</button>
            <button onClick={reset} className="btn">Reset</button>
        </>
    )
}
