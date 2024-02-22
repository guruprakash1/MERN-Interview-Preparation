import React from 'react';
import HigherOrderIncreaseCounter from "../HOC/HigherOrderIncreaseCounter";

const ComponentA = ({ count, increaseCounter }) => {
    return (
        <>
            <button onClick={increaseCounter}>Increase Counter Value</button>
            <p>Counter: {count}</p>
        </>
    );
}

export default HigherOrderIncreaseCounter(ComponentA);
